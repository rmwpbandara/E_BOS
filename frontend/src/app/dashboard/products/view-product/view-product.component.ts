import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/_service/custom/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    this.productService.deleteProduct(product_id).subscribe(res => {

      if (res['ok']) {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Product Delete Successfully !',
          showConfirmButton: false,
          timer: 3000
        });
        location.reload();
        this.router.navigate(['/dashboard/products-view']);
        
      }
    });

  }

}
