import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
})
export class ProductEditComponent implements OnInit {

  productForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
    });
  }
  
  updateProduct():void {
    console.log(this.productForm.value);
  }

}
