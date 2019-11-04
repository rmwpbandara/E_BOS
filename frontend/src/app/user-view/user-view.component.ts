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
  user_data;
  search_data;
  
  constructor(fb: FormBuilder, private productServiceObject: ProductService, private userService : UserService , private router: Router) { 
    this.search_data = JSON.parse(localStorage.getItem('search_data'));

    this.userService.getUser()
    .subscribe(res=>{
      let user_data =JSON.parse(res['_body']);
      this.user_data = user_data;
    });


    
    if( (!this.search_data) || ( this.search_data['min_price'] == "" && this.search_data['max_price'] == "" && this.search_data['manufacture_id'] == "") ){
      this.productServiceObject.viewProducts().subscribe(res=>{
        let data =JSON.parse(res['_body']);
        let i = 1
        while(i < 5){
  
          this.products.push(data[data.length-i]);
          i++;
        }
      });
    } else {
      // searched data in the local storage
    this.productServiceObject.viewProducts().subscribe(res=>{
      let data =JSON.parse(res['_body']);
      data.forEach( (myObject, index) => {


        let search_data_min_price =  parseInt(this.search_data.min_price); //parseInt=> convert local storage to integer
        let search_data_max_price =  parseInt(this.search_data.max_price);
        let search_data_manufacture_id =  parseInt(this.search_data.manufacture_id);
        
        let product_price = myObject.price;
        let product_manufacture_id = myObject.seller_id;
        
        console.log(search_data_max_price);
        console.log(product_price);
        
        if(search_data_manufacture_id){
          if( search_data_min_price  <= product_price && product_price <= search_data_max_price && search_data_manufacture_id == product_manufacture_id){
            this.products.push(myObject);
          }
        } else if( search_data_min_price  <= product_price  && product_price <= search_data_max_price){
          this.products.push(myObject);
        } else {
          // this.products.push(myObject);
        }


      });
    });
    }
  }

  ngOnInit() : void{

    let search_data_min_price = 0;
    let search_data_max_price = 1000000;
    let search_data_manufacture_id = '';

    if(this.search_data){
      search_data_min_price = this.search_data.min_price;
      search_data_max_price = this.search_data.max_price;
      search_data_manufacture_id = this.search_data.manufacture_id;

    }

    this.searchForm = new FormGroup({
      min_price: new FormControl(search_data_min_price),
      max_price: new FormControl(search_data_max_price),
      manufacture_id: new FormControl(search_data_manufacture_id),
    });
  }

  findProducts(search_data){
    localStorage.removeItem('search_data');
    localStorage.setItem('search_data',JSON.stringify(search_data));
    location.reload();
  }

  addToCart(product){
    alert("add to cart works !")
  }
}
