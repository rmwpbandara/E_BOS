import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/_service/custom/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productEditForm: FormGroup;
  seller_id;
  product_details;
  product_data;

  constructor(fb: FormBuilder, private productService: ProductService, private router: Router) {
    
    this.product_data = JSON.parse(localStorage.getItem('edit_product'));

    this.productEditForm = fb.group({
      name: [this.product_data['name'], Validators.required],
      price: [this.product_data['price'], Validators.required],
      weight: [this.product_data['weight'], Validators.required],
      quantity: [this.product_data['quantity'], Validators.required],
      description: [this.product_data['description'], Validators.required],
      image_url: [null, Validators.required]
    });

    let data = JSON.parse(localStorage.getItem('user'));
    this.seller_id = data['id'];

  }
  ngOnInit() {  }

  updateProduct(form_data){

    form_data['id'] = this.product_data['id'];
    form_data['seller_id'] = this.seller_id;

    this.productService.updateProduct(form_data).subscribe(res => {
      if (res['ok']) {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Product Update Successfully !',
          showConfirmButton: false,
          timer: 2000
        });
        this.router.navigate(['/dashboard/products-view']);
        localStorage.removeItem('edit_product');
      }
    })

  }
}
