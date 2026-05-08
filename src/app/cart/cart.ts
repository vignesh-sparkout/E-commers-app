import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../service/cart';

@Component({
  standalone: true,
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  constructor(public cartService: CartService) {

    // Remove badge when opening cart page

    this.cartService.showBadge.set(false);

  }

  increase(index: number) {

    this.cartService.increaseQty(index);

  }

  decrease(index: number) {

    this.cartService.decreaseQty(index);

  }

  removeItem(index: number) {

    this.cartService.remove(index);

  }

}