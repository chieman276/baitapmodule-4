import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  // loginForm! : FormGroup;
  loginForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    //   this.loginForm = new FormGroup({
    //     email: new FormControl('',[Validators.email,Validators.required]),
    //     password: new FormControl('',[Validators.required,Validators.minLength(6)]),

    //   });
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })


  }

  submitLogin(): void {
    console.log(this.loginForm.value);
  }

}
