import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private commonsService:CommonService) { }

  register(value){
    console.log(value);
    return this.commonsService.apiPost(value, 'user/register');
  }

  getUser(){
    return this.commonsService.apiGet('user/all');
  }

  login(value){
    console.log(value);
    return this.commonsService.apiPost(value, 'user/login');
  }
  
  getUserData(userId){
    return this.commonsService.apiGet('user/find/'+userId);
  }

  updateUser(data){
    console.log(data);
    return this.commonsService.apiPost(data, 'user/update');
  }

  getLocalCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getLocalCurrentUserId() {
    return JSON.parse(localStorage.getItem('user')).id;
  }
}
