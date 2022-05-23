import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.css']
})
export class FormSubmitComponent implements OnInit {

  productForm! : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.productForm = new FormGroup ({
      email: new FormControl(''),
      password: new FormControl(''),
      country: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormControl(''),
    })
  }

  updateSubmit():void {
    console.log(this.productForm.value);
  }

}
