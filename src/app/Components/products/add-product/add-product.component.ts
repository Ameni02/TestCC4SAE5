import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    available: new FormControl('true', Validators.required),
    likes: new FormControl('0', []), 
  });

  get name() {
    return this.product.get('name');
  }

  get description() {
    return this.product.get('description');
  }

  get price() {
    return this.product.get('price');
  }

  get available() {
    return this.product.get('available');
  }

  get likes() {
    return this.product.get('likes');
  }

  Add() {
   
      console.log( this.product.value);
    
  }
}
