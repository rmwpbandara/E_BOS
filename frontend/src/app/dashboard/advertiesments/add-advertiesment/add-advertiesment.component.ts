import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_service/custom/user.service';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-add-advertiesment',
  templateUrl: './add-advertiesment.component.html',
  styleUrls: ['./add-advertiesment.component.scss']
})
export class AddAdvertiesmentComponent implements OnInit {
  adForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router, private auth: UserService, private adService: AdService) {
    this.adForm = fb.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      image_url: [null, Validators.compose([Validators.required])],
      addedBy: [this.auth.getLocalCurrentUser]
    });
  }

  ngOnInit() {
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.adForm.get('image_url').setValue(file);
    }
  }

  addAd(form_data) {



    let image_url = form_data['image_url'];

    const fd = new FormData();
    
    fd.set("file", this.adForm.get('image_url').value);
    this.adForm.get('image_url').setValue(null);
    fd.set("body", JSON.stringify(this.adForm.value));
  

    this.adService.addAd(fd).subscribe(res => {
      // console.log('res => ', res);
      if (res['ok']) {

        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Advertiesment Added Successfully !',
          showConfirmButton: false,
          timer: 2000
        });

        this.adForm.reset();

     // this.router.navigate(['/dashboard/products-view']);
      }

    })
  }

}
