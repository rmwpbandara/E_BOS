import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private commonsService:CommonService) { }

  signUpUser(value){
    console.log(value);
    return this.commonsService.apiPost(value, 'user/add');
  }

  getUser(){
    return this.commonsService.apiGet('user/all');
  }

  loginUser(value){
    console.log(value);
    return this.commonsService.apiPost(value, 'user/login');
  }
  
  getUserData(userId){
    return this.commonsService.apiGet('user/find/'+userId);
  }

  updateUser(data){
    return this.commonsService.apiPut(data, 'user/update');
  }
}
