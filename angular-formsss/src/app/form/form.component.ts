import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit (value: any){
    console.log(value);
  }

  onResetForm(formProfile: NgForm){
    console.log(formProfile)
    formProfile.reset();
  }

}
