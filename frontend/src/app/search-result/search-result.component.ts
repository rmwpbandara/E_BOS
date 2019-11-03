import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../_service/custom/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  products;
  constructor(fb: FormBuilder, private productServiceObject: ProductService, private router: Router) { 

    this.productServiceObject.viewProducts().subscribe(res=>{
      let data =JSON.parse(res['_body']);
      this.products = data;
    });
  }

  ngOnInit() {
  }


  
}
