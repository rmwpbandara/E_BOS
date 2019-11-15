import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private commonServiceObject: CommonService
    , private auth: UserService) { }

  addOrder(user, products: any[]) {
    const p = [];
    products.forEach(prod => {
      p.push({
        productModel: prod,
        quantity: prod.userQuantity
      });
    })

    const reqBody = {
      temporyUser: user,
      products: p
    }
    return this.commonServiceObject.apiPost(reqBody, 'order/add');
  }

  getOrdersOfSeller() {
    return this.commonServiceObject.apiGet('order/seller/' + this.auth.getLocalCurrentUserId());
  }

  approveProducts(products){
    return this.commonServiceObject.apiPost(products, 'order/approve');
  }

  rejectProducts(products){
    return this.commonServiceObject.apiPost(products, 'order/reject');
  }

}
