import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  static cartItems = [];

  constructor(private http: HttpClient) {
    this.initCart();
  }

  clearCart() {
    localStorage.removeItem('cart')
    CartService.cartItems = [];
  }

  initCart() {
    if (localStorage.getItem('cart'))
      CartService.cartItems = JSON.parse(localStorage.getItem('cart'));
  }

  addCartItem(item) {
    CartService.cartItems.push(item);
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(CartService.cartItems));
  }

  removeCartItem(item) {
    CartService.cartItems.splice(CartService.cartItems.indexOf(x => x.id === item.id), 1);
    this.saveCart();
  }

  isInCart(item){
    return CartService.cartItems.filter(x => x.id === item.id).length !== 0;
  }

  getCount() {
    return CartService.cartItems.length;
  }

  getItems() {
    return CartService.cartItems;
  }
}
