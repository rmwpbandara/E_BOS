import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_service/custom/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 

  userLoginForm: FormGroup;

  constructor(fb: FormBuilder, private userService: UserService, private router: Router) {

    this.userLoginForm = fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  login(user){

    console.log(user);

    this.userService.login(user).subscribe(res=>{

      let data =JSON.parse(res['_body']);

      if(data['id']){

        console.log(data);
        localStorage.setItem('user',res['_body']);
        this.router.navigate(['/dashboard']);
      }
     
    });
    
  }
}
