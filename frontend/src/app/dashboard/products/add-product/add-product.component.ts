import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/_service/custom/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productAddForm: FormGroup;
  seller_id;

  constructor(fb: FormBuilder, private productService: ProductService, private router: Router) {
    let data = JSON.parse(localStorage.getItem('user'));
    this.seller_id = data['id'];
    this.productAddForm = fb.group({
      name: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      weight: ['', Validators.compose([Validators.required])],
      quantity: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      image_url: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {

  }
  addProduct(form_data) {



    let image_url = form_data['image_url'];

    let image_url_new = image_url.replace("C:\\fakepath\\","../../assets/img/");    

    form_data['image_url'] = image_url_new;

    
    form_data['seller_id'] = this.seller_id;

    this.productService.addProduct(form_data).subscribe(res => {
      // console.log('res => ', res);
      if (res['ok']) {

        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Product Added Successfully !',
          showConfirmButton: false,
          timer: 2000
        });

        this.productAddForm.reset();

     // this.router.navigate(['/dashboard/products-view']);
      }

    })
  }

}
