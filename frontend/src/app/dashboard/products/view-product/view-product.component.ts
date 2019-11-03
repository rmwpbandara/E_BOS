import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/_service/custom/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  products = [];
  product_id;

  constructor(private productService: ProductService, private router: Router) {
    
    this.productService.viewProducts().subscribe(res => {
      this.products = JSON.parse(res['_body']);
    })
  }

  ngOnInit() {
  }

  editProduct(product_id){

    this.productService.getProduct(product_id).subscribe(res => {
      localStorage.setItem('edit_product',res['_body']);
      this.router.navigate(['/dashboard/products-edit']);
    });
  }

  deleteProduct(product_id){
    console.log(product_id);
  }

}
