import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  name: string = '';
  price: number = 20000;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(data:any):void {
    console.log(data);
  }
}
