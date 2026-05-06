import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../Service/cart';
@Component({
  standalone:true,
  selector: 'app-product-list',
  imports: [RouterModule,CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  constructor(private cartService: CartService) {}

products = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Mobile', price: 20000 }
];

  addToCart(p: any) {
    this.cartService.add(p);
    alert('Added to cart ');
  }
}

