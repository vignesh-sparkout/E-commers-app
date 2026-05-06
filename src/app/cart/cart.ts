import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../Service/cart';

@Component({
  standalone:true,
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(public cartService: CartService) {}


}
