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
      name: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      weight: ['', Validators.compose([Validators.required])],
      quantity: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      image_url: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {

  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.productAddForm.get('image_url').setValue(file);
    }
  }

  addProduct(form_data) {



    let image_url = form_data['image_url'];

    const fd = new FormData();
    
    fd.set("file", this.productAddForm.get('image_url').value);
    this.productAddForm.get('image_url').setValue(null);
    fd.set("body", JSON.stringify(this.productAddForm.value));
  

    this.productService.addProduct(fd).subscribe(res => {
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
