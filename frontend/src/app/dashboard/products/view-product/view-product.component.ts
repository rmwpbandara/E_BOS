import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_service/custom/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  products = [];

  constructor(private productService: ProductService, private router: Router) {

    this.productService.viewProducts().subscribe(res => {
      this.products = JSON.parse(res['_body']);
      console.log(this.products);
    })
  }

  ngOnInit() {
  }

}
