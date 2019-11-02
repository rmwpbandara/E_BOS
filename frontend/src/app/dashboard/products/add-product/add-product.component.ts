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

  constructor(fb: FormBuilder, private productService: ProductService, private router: Router) {
    this.productAddForm = fb.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      weight: [null, Validators.required],
      quantity: [null, Validators.required],
      description: [null, Validators.required],
      image_url: [null, Validators.required],
      // email: ['', Validators.compose([Validators.email, Validators.required])],
      // password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      // repeatpassword: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit() {

  }
  addProduct(form_data) {
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

      }

    })
  }

}
