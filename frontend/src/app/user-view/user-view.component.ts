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
  cart_products = [];
  
  constructor(fb: FormBuilder, private productServiceObject: ProductService, private userService : UserService , private router: Router) { 
    this.search_data = JSON.parse(localStorage.getItem('search_data'));

    this.userService.getUser()
    .subscribe(res=>{
      let user_data =JSON.parse(res['_body']);
      this.user_data = user_data;
    });


    
    if( (!this.search_data) || ( this.search_data['min_price'] == "" && this.search_data['max_price'] == "" && this.search_data['manufacture_id'] == "" && this.search_data['product_name'] == "") ){
      this.productServiceObject.viewProducts().subscribe(res=>{
        let data =JSON.parse(res['_body']);
        let i = 1
        while(i < 5){
  
          this.products.push(data[data.length-i]);
          i++;
        }
      });
    } else {

      // console.log(this.search_data);

      // searched data in the local storage
    this.productServiceObject.viewProducts().subscribe(res=>{
      let data =JSON.parse(res['_body']);
      data.forEach( (myObject, index) => {

        let search_data_product_name =  this.search_data.product_name.toLowerCase();
        let search_data_min_price =  parseInt(this.search_data.min_price); //parseInt=> convert local storage to integer
        let search_data_max_price =  parseInt(this.search_data.max_price);
        let search_data_manufacture_id =  parseInt(this.search_data.manufacture_id);
        
        let product_name = myObject.name.toLowerCase();
        let product_price = myObject.price;
        let product_manufacture_id = myObject.seller_id;
        
        let max = search_data_max_price >= product_price;
        let min = search_data_min_price <= product_price;
        let seller = search_data_manufacture_id == product_manufacture_id;
        let name = product_name.indexOf(search_data_product_name) > -1;

        // search_data_product_name //search_data_manufacture_id //search_data_min_price // search_data_max_price
        // 0 0 0 1
        if(!search_data_product_name && !search_data_manufacture_id && !search_data_min_price && search_data_max_price){
          if(max){
            this.products.push(myObject);
          }
        }

        // 0 0 1 0
        if(!search_data_product_name && !search_data_manufacture_id && search_data_min_price && !search_data_max_price){
          if(min){
            this.products.push(myObject);
          }
        }

        // 0 0 1 1
        if(!search_data_product_name && !search_data_manufacture_id && search_data_min_price && search_data_max_price){
          if(min && max){
            this.products.push(myObject);
          }
        }

        // 0 1 0 0
        if(!search_data_product_name && search_data_manufacture_id && !search_data_min_price && !search_data_max_price){
          if(seller){
            this.products.push(myObject);
          }
        }

        // 0 1 0 1
        if(!search_data_product_name && search_data_manufacture_id && !search_data_min_price && search_data_max_price){
          if(seller && max){
            this.products.push(myObject);
          }
        }

        // 0 1 1 0
        if(!search_data_product_name && search_data_manufacture_id && search_data_min_price && !search_data_max_price){
          if(seller && min){
            this.products.push(myObject);
          }
        }
        
        // 0 1 1 1
        if(!search_data_product_name && search_data_manufacture_id && search_data_min_price && search_data_max_price){
          if(seller && min && max){
            this.products.push(myObject);
          }
        }

        // 1 0 0 0
        if(search_data_product_name && !search_data_manufacture_id && !search_data_min_price && !search_data_max_price){
          if(name){
            this.products.push(myObject);
          }
        }

        // 1 0 0 1
        if(search_data_product_name && !search_data_manufacture_id && !search_data_min_price && search_data_max_price){
          if(name && max){
            this.products.push(myObject);
          }
        }

        // 1 0 1 0
        if(search_data_product_name && !search_data_manufacture_id && search_data_min_price && !search_data_max_price){
          if(name && min){
            this.products.push(myObject);
          }
        }

        // 1 0 1 1
        if(search_data_product_name && !search_data_manufacture_id && search_data_min_price && search_data_max_price){
          if(name && min && max){
            this.products.push(myObject);
          }
        }

        // 1 1 0 0
        if(search_data_product_name && search_data_manufacture_id && !search_data_min_price && !search_data_max_price){
          if(name && seller){
            this.products.push(myObject);
          }
        }

        // 1 1 0 1
        if(search_data_product_name && search_data_manufacture_id && !search_data_min_price && search_data_max_price){
          if(name && seller && max){
            this.products.push(myObject);
          }
        }

        // 1 1 1 0
        if(search_data_product_name && search_data_manufacture_id && search_data_min_price && !search_data_max_price){
          if(name && seller && min){
            this.products.push(myObject);
          }
        }

        // 1 1 1 1
        if(search_data_product_name && search_data_manufacture_id && search_data_min_price && search_data_max_price){
          if(name && seller && min && max){
            this.products.push(myObject);
          }
        }
        
      });
    });
    }
  }

  ngOnInit() : void{

    let search_data_product_name = '';
    let search_data_min_price = '';
    let search_data_max_price = '';
    let search_data_manufacture_id = '';

    if(this.search_data){
      search_data_product_name = this.search_data.product_name;
      search_data_min_price = this.search_data.min_price;
      search_data_max_price = this.search_data.max_price;
      search_data_manufacture_id = this.search_data.manufacture_id;

    }

    this.searchForm = new FormGroup({
      product_name: new FormControl(search_data_product_name),
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

    localStorage.removeItem('cart_products');
    localStorage.setItem('cart_products',JSON.stringify(product));

    let current_product_data = JSON.parse(localStorage.getItem('cart_products'));

    this.cart_products.push(current_product_data);

    console.log(this.cart_products);
    


    // location.reload();
  }
}
