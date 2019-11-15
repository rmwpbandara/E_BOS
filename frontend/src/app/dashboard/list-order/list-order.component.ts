import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_service/custom/product.service';
import { OrderService } from 'src/app/_service/custom/order.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {
  orders = [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrdersOfSeller().subscribe(val => {
      console.log(JSON.parse(val['_body']));
      this.orders = JSON.parse(val['_body']);
    });
  }

  approve(order: any) {
    this.orderService.approveProducts(order).subscribe(val => {
      order.orderProducts.forEach(element => {
        element.approved = true;
      });
      console.log(val['_body']);
    });
  }

  reject(order: any) {
    this.orderService.rejectProducts(order).subscribe(val => {
      this.orders.splice(this.orders.indexOf(order),1);
      console.log(val['_body']);
    });
  }

  isApproved(order){
    return !order.orderProducts[0].approved;
  }

}
