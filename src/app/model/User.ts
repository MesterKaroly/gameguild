import {Role} from './Role';

export class User {
  private _name: string;
  private _role: Role;
  private _userName: string;
  private _password: string;
  private _email: string;


  constructor(role: Role, userName: string, password: string, email: string, name?: string) {
    this._name = name || '';
    this._role = role || Role.GUEST;
    this._userName = userName;
    this._password = password;
    this._email = email;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get role(): Role {
    return this._role;
  }

  set role(value: Role) {
    this._role = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
