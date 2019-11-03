import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private commonsService:CommonService) { }

  addProduct(form_data){
    return this.commonsService.apiPost(form_data, 'product/add');
  }

  viewProducts(){
    return this.commonsService.apiGet('product/all');
  }

  getProduct(id){
    return this.commonsService.apiGet('product/find/'+id);
  }

  updateProduct(form_data){
    return this.commonsService.apiPut(form_data, 'product/update');
  }
}
