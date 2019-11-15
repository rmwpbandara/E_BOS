import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../_service/custom/order.service';
import { CartService } from '../_service/custom/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    public cartService: CartService

  ) {


  }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      nic: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  addOrder(form_data) {
    if(!this.userForm.valid){
      alert('invalid data');
      return;
    }
    this.orderService.addOrder(form_data, this.cartService.getItems())
      .subscribe(response_data => {
        console.log(response_data);
        this.cartService.clearCart();
        this.userForm.reset();
        alert('Order added. Check email.')
      });
  }

}
