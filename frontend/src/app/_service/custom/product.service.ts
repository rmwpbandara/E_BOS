import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private commonsService:CommonService) { }

  addProduct(value){
    return this.commonsService.apiPost(value, 'product/add');
  }

  viewProducts(){
    return this.commonsService.apiGet('product/all');
  }
}
