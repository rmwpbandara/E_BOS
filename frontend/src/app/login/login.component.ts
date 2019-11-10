import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_service/custom/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 

  userForm: FormGroup;

  constructor(fb: FormBuilder, private userService:UserService, private router: Router) {
    this.userForm = fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

  ngOnInit() {
  }

  login(user){

    console.log(user);

    this.userService.login(user).subscribe(res=>{

      let data =JSON.parse(res['_body']);   
      
      if(data['id'] != null){

        localStorage.setItem('user',res['_body']);
        this.router.navigate(['/dashboard']);
      } else {

        Swal.fire({
        position: 'center',
        type: 'error',
        title: 'Wrong Details !',
        showConfirmButton: false,
        timer: 2000
      });
        
      }

      // Swal.fire({
      //   position: 'top-end',
      //   type: 'error',
      //   title: 'Wrong Details !',
      //   showConfirmButton: false,
      //   timer: 2000
      // });
     
    });

    
     
    
  }
}
