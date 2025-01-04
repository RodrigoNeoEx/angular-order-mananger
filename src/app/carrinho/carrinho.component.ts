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

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  ngOnInit(): void {
    
  }
}

