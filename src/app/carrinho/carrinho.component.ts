import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CartQuery } from '../stores/cart/cart.query';
import { SingleProductQuery } from '../stores/item/single-product.query';
import { UserData, UserStore } from '../stores/user-data/user.store';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  totalPrice$ = this.cartQuery.select((state) => state.totalPrice);
  allProducts$ = this.productsQuery.allProducts$;

  userData: FormGroup;
  paymentData: FormGroup;
  isLinear = false;

  constructor(
    private cartQuery: CartQuery,
    private productsQuery: SingleProductQuery,
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

  ngOnInit(): void {}

  onSubmit() {
    if (this.userData.valid && this.paymentData.valid) {
      const userData = {
        ...this.userData.getRawValue(),
        ...this.paymentData.getRawValue(),
      } as UserData;
  
      this.userStore.updateUserData(userData);
      console.log(userData);
    } else {
      console.log('Formulário inválido.');
    }
  }
  
}
