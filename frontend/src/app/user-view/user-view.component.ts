import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../_service/custom/user.service';
import { Router } from '@angular/router';
import { ProductService } from '../_service/custom/product.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  searchForm: FormGroup;
  products = [];
  
  constructor(fb: FormBuilder, private productServiceObject: ProductService, private router: Router) { 
    let data = JSON.parse(localStorage.getItem('search_data'));

    if(data['product_name'] == "" && data['price_range'] == "" && data['manufacture_id'] == ""){
      this.productServiceObject.viewProducts().subscribe(res=>{
        let data =JSON.parse(res['_body']);
        let i = 1
        while(i < 5){
  
          this.products.push(data[data.length-i]);
          i++;
        }
      });
    } else {
      this.productServiceObject.viewProducts().subscribe(res=>{
        let data =JSON.parse(res['_body']);
        data.forEach( (myObject, index) => {

          // search login here
          this.products.push(myObject);
        });
      });
    }
  }

  ngOnInit() : void{
    this.searchForm = new FormGroup({
      product_name: new FormControl(''),
      price_range: new FormControl(''),
      manufacture_id: new FormControl(''),
    });
  }

  findProducts(search_data){
    localStorage.setItem('search_data',JSON.stringify(search_data));
    location.reload();
  }

  addToCart(product){
    alert("add to cart works !")
  }
}
