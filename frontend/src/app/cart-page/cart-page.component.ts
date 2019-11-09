import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../_service/custom/order.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  TestForm: FormGroup;

  constructor(formBuilderObject: FormBuilder, private orderServiceObject : OrderService) {
    this.TestForm = formBuilderObject.group({
      test_text: [null, Validators.required],
      test_number: [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  addOrder(form_data){
    this.orderServiceObject.addOrderInOrderServiceClass(form_data)
    .subscribe(response_data => {
      console.log(response_data);
    });
  }

}
