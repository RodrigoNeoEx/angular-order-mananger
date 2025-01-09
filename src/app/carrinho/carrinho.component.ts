import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CartQuery } from '../stores/cart/cart.query';
import { UserData, UserStore } from '../stores/user-data/user.store';
import { CartStore } from '../stores/cart/cart.store';
import { firstValueFrom } from 'rxjs';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})

export class CarrinhoComponent {
  totalPrice$ = this.cartQuery.select((state) => state.totalPrice);
  products$ = this.cartQuery.products$;
  hasProductsInCart$ = this.cartQuery.hasProductsInCart$;
  selected = '';
  textControl = false;

  userData: FormGroup;
  paymentData: FormGroup;
  isLinear = false;

  constructor(
    private cartQuery: CartQuery,
    private cartStore: CartStore,
    private _formBuilder: FormBuilder,
    private userStore: UserStore
  ) {
    this.userData = this._formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      addressNumber: ['', Validators.required],
      neighborhood: ['', Validators.required],
      reference: [''],
    });

    this.paymentData = this._formBuilder.group({
      paymentMethod: ['', Validators.required],
    });
  }

  incrementQuantity(productId: string) {
    this.cartStore.incrementProductQuantity(productId);
  }
  
  decrementQuantity(productId: string) {
    this.cartStore.decrementProductQuantity(productId);
  }
  

  onSubmit() {
    if (this.userData.valid || this.paymentData.valid) {
      const userData = {
        ...this.userData.getRawValue(),
        ...this.paymentData.getRawValue(),
      } as UserData;
  
      this.userStore.updateUserData(userData);
    }
  }

  ngOnInit() {
    this.selected = this.paymentData.get('paymentMethod')?.value || '';
    this.textControl = this.selected === 'pix';
  }

  onSelectionChange(value: string) {
    this.selected = value;
    this.textControl = this.selected === 'pix';
  }

  async onStepChange(event: any, stepper: MatStepper) {
    const stepIndex = event.selectedIndex; 

    const hasProducts = await firstValueFrom(this.hasProductsInCart$);  

    if (stepIndex === 1 && !hasProducts) {
      stepper.selectedIndex = 0; 
      return;
    }  

    if (stepIndex === 2) {
      if (!this.userData.valid) {
        stepper.selectedIndex = 1;
        return;
      }  
      return this.onSubmit();
    }
  }
  
  
  
  
}
