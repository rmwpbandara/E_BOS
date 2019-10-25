import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  searchForm: FormGroup;
  
  constructor() { }

  ngOnInit() : void{
    this.searchForm = new FormGroup({
      search_keyword: new FormControl(''),
      price_range: new FormControl(''),
      manufacture: new FormControl(''),
    });
  }

  onSubmit(){
    let form_data = this.searchForm.value ;
    console.log('form_data', form_data);
  }

}
