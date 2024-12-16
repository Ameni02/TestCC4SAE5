import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  x: Product = new Product();
  show: boolean = false;
  listProducts: Product[] = [];

}
