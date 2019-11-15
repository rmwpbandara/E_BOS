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
      id: [this.product_data['id'], Validators.required],
      name: [this.product_data['name'], Validators.required],
      price: [this.product_data['price'], Validators.required],
      weight: [this.product_data['weight'], Validators.required],
      quantity: [this.product_data['quantity'], Validators.required],
      description: [this.product_data['description'], Validators.required],
      image_url: [this.product_data['image_url'], Validators.required]
    });

    let data = JSON.parse(localStorage.getItem('user'));
    this.seller_id = data['id'];

  }
  ngOnInit() {  }

  updateProduct(form_data) {



    let image_url = form_data['image_url'];

    const fd = new FormData();
    
    fd.set("file", this.productEditForm.get('image_url').value);
    this.productEditForm.get('image_url').setValue(null);
    fd.set("body", JSON.stringify(this.productEditForm.value));
  

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

        this.productEditForm.reset();

     // this.router.navigate(['/dashboard/products-view']);
      }

    })
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.productEditForm.get('image_url').setValue(file);
    }
  }

  updateProductOld(form_data){

    form_data['id'] = this.product_data['id'];
    form_data['seller_id'] = this.seller_id;

    let image_url = form_data['image_url'];

    let image_url_new = image_url.replace("C:\\fakepath\\","../../assets/img/");    

    form_data['image_url'] = image_url_new;

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
