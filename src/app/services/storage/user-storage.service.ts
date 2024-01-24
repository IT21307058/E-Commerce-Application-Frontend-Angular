import { Injectable } from '@angular/core';

const TOKEN = "ecom-token";
const USER = "ecom-user";

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  // save token in storage
  public saveToken(token: string):void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  // save user in storage
  public saveUser(user):void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }
}
