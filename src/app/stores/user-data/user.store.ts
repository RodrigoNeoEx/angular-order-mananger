import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';

export interface UserData {
  name: string,
  phone: string,
  address: string,
  addressNumber: string,
  neighborhood: string,
  reference: string,
  paymentMethod: string,
}

@Injectable({ providedIn: 'root'})
@StoreConfig({ name: 'User'})

export class UserStore extends Store<UserData> {
  constructor() {
    super({
      name: '',
      phone: '',
      address: '',
      addressNumber: '',
      neighborhood: '',
      reference: '',
      paymentMethod: '',
    })
  }

  updateUserData(userData: Partial<UserData>) {
    this.update(userData)
  }



}