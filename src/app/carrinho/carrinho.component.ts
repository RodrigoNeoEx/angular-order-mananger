import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CartQuery } from '../stores/cart/cart.query';
import { UserData, UserStore } from '../stores/user-data/user.store';
import { CartStore } from '../stores/cart/cart.store';
import { firstValueFrom, Observable } from 'rxjs';
import { MatStepper } from '@angular/material/stepper';

// import { OrderService } from '../services/order.service';

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

  async sendOrderToWpp(userData: FormGroup, paymentData: FormGroup, totalPrice$: Observable<number>, products$: Observable<any[]>) {

    const totalPrice = await firstValueFrom(totalPrice$);
    const products = await firstValueFrom(products$);
    const user = userData.getRawValue()
    const payment = paymentData.getRawValue()
    const message = encodeURIComponent(`

Seu pedido foi realizado com sucesso ${user.name}! 🎉

Itens do pedido:
${products.map((product) => 
`${product.quantity}x  ${product.id} total - R$ ${(product.quantity * product.price).toFixed(2)}`).join('\n')}

Dados do Cliente:
Nome: ${user.name}
Telefone: ${user.phone}
Endereço: ${user.address}, ${user.addressNumber} - ${user.neighborhood}

💳 Forma de Pagamento: ${payment.paymentMethod}
💵 Total: R$ ${totalPrice.toFixed(2)}


Obrigado pela preferência! 😊
        `);
        
    const whatsappLink = `https://wa.me/${user.phone}?text=${message}`;            

    return window.open(whatsappLink, '_blank');
  }
}


  
  
  
  

