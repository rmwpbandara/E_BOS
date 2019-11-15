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
  
  }

  ngOnInit() {
    this.productService.viewProducts().subscribe((val) => {
      console.log(val['_body']);
      this.products = JSON.parse(val['_body']);
    });
  }

  editProduct(product_id){
    this.productService.getProduct(product_id).subscribe(res => {
      localStorage.setItem('edit_product',res['_body']);
      this.router.navigate(['/dashboard/products-edit']);
    });
  }

  deleteProduct(product_id){

    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).
    
    then((result) => {
      if (result.value) {
        this.productService.deleteProduct(product_id).subscribe(res => {
          if (res['ok']) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
            location.reload();
            this.router.navigate(['/dashboard/products-view']);
          }
        });
        
        
      }
    });


  

  }

}
