import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/_service/custom/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productAddForm: FormGroup;
  
  constructor(fb: FormBuilder, private productService:ProductService, private router: Router) { }

  ngOnInit() : void{
    this.productAddForm = new FormGroup({
      product_name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
    });
  }

  addProduct(){
    let form_data = this.productAddForm.value ;
    // console.log('form_data', form_data);
    this.productService.addProduct(form_data);


    // this.userService.signUpUser(userdata).subscribe(res=>{
    //   if(res['ok']){
    //     this.router.navigate(['/login'])
    //   }
    // })
  }

}
