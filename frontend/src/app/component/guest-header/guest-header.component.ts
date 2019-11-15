import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_service/custom/cart.service';
import { UserService } from 'src/app/_service/custom/user.service';

@Component({
  selector: 'app-guest-header',
  templateUrl: './guest-header.component.html',
  styleUrls: ['./guest-header.component.scss']
})
export class GuestHeaderComponent implements OnInit {
  currUser;

  constructor(private cartService: CartService, private auth: UserService) { }

  ngOnInit() {
    this.currUser = this.auth.getLocalCurrentUser();
  }

  getCount(){
    return this.cartService.getCount();
  }

}
