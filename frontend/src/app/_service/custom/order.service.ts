import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor( private commonServiceObject : CommonService) { }

  addOrderInOrderServiceClass(form_data){
    return this.commonServiceObject.apiPost(form_data, 'order/add');
  }

}
