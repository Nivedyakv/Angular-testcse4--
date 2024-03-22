import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: any[] = [
    { name: 'Product 1', price: 20, imageUrl: 'assets/A5.jpg' },
    { name: 'Product 2', price: 30, imageUrl: 'assets/A4.jpg' },
    { name: 'Product 3', price: 25, imageUrl: 'assets/A3.jpg' },
    { name: 'Product 1', price: 20, imageUrl: 'assets/A3.jpg' },
    { name: 'Product 2', price: 30, imageUrl: 'assets/A5.jpg' },
    { name: 'Product 3', price: 25, imageUrl: 'assets/A4.jpg' }
   
  ];
}
