import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private commonsService:CommonService) { }

  addProduct(value){
    console.log('in service file');
    
    console.log(value);
    // return this.commonsService.apiPost(value, 'user/add');
  }
}
