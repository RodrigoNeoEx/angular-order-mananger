import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { CartQuery } from '../stores/cart/cart.query'
import { SingleProductQuery } from '../stores/item/single-product.query';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],  
})


export class CarrinhoComponent implements OnInit {
  totalPrice$ = this.cartQuery.select(state => state.totalPrice);
  allProducts$ = this.productsQuery.allProducts$



  private _formBuilder = inject(FormBuilder);


  constructor(
    private cartQuery: CartQuery,
    private productsQuery: SingleProductQuery
  ){}

  itensOnCart = this._formBuilder.group({  });

  userData = this._formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    homeNumber: ['', Validators.required],
    neighborhood: ['', Validators.required],
    reference: ['', Validators.required],
  });

  paymentData = this._formBuilder.group({
    paymentMethod: ['', Validators.required],
    cardData: ['', Validators.required],

  })

  isLinear = false;

  ngOnInit(): void {
    
  }
}

