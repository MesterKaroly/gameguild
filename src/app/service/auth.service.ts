import { Injectable } from '@angular/core';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: User;
  private _isLoggedIn: boolean;

  constructor() { }


  get user(): User {
    return this._user;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
}
