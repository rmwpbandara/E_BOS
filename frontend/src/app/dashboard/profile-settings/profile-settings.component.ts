import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/_service/custom/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  
  userForm: FormGroup;
  user_data;
  constructor(fb: FormBuilder, private userService: UserService, private router: Router) {

    this.user_data = JSON.parse(localStorage.getItem('user'));

    console.log(this.user_data);
    

    this.userForm = fb.group({
      name: [this.user_data['name'], Validators.compose([Validators.required])],
      location: [this.user_data['location'], Validators.compose([Validators.required])],
      contact: [this.user_data['contact'], Validators.compose([Validators.required])],
      email: [this.user_data['email'], Validators.compose([Validators.email, Validators.required])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
    });

  }

  ngOnInit() {
  }

  updateUser(user){

    user['id'] = this.user_data['id'];

    this.userService.updateUser(user).subscribe(res=>{

      localStorage.setItem('user',res['_body']);
      
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'User Updated Successfully !',
        showConfirmButton: false,
        timer: 2000
      });

    });


    
  }
}
