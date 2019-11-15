import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private commonsService:CommonService,
    private auth: UserService) { }

  addProduct(form_data: FormData){
    return this.commonsService.apiPostMulti(form_data, 'product/add/' + this.auth.getLocalCurrentUserId());
  }

  viewProducts(){
    return this.commonsService.apiGet('product/get/'+this.auth.getLocalCurrentUserId());
  }

  viewAllProducts(){
    return this.commonsService.apiGet('product/all');
  }

  getProduct(id){
    return this.commonsService.apiGet('product/find/'+id);
  }

  updateProduct(form_data){
    return this.commonsService.apiPut(form_data, 'product/update');
  }

  deleteProduct(id){
    return this.commonsService.apiDelete('product/delete/'+id);
  }
}
