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


  userForm: FormGroup;

  constructor(fb: FormBuilder, private userService: UserService, private router: Router) {

    this.userForm = fb.group({
      name: ['', Validators.compose([Validators.required])],
      location: ['', Validators.compose([Validators.required])],
      contact: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      repeatpassword: [null, Validators.compose([Validators.required, Validators.minLength(4)])]
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
