import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserStore } from './user.store';
import { UserData } from './user.store'


@Injectable({ providedIn: 'root' })

export class UserQuery extends Query<UserData> {
  constructor(protected override store: UserStore){
    super(store)
  }
}