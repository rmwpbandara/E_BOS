import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../_service/custom/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // name location contact email password repeatpassword


  userRegisterForm: FormGroup;

  constructor(fb: FormBuilder, private userService: UserService, private router: Router) {

    
    this.userRegisterForm = fb.group({
      name: [null, Validators.required],
      location: [null, Validators.required],
      contact: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      repeatpassword: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  register(user){

    console.log(user);

    this.userService.register(user).subscribe(res=>{

      console.log(res);
      
      if(res['ok']){
        this.router.navigate(['/login'])
      }
    })
    
  }

}
