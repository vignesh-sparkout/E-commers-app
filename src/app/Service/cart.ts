import {
  Injectable,
  signal,
  computed,
  effect
} from '@angular/core';

import { Product } from './product.service';

export interface CartItem extends Product { quantity: number;}

@Injectable({
  providedIn: 'root',
})

export class CartService {

  constructor() {

  effect(() => {

    localStorage.setItem(
      'cart',
      JSON.stringify(this.cart())
    );

  });

}

  cart = signal<CartItem[]>(JSON.parse(
    localStorage.getItem('cart') || '[]'
  )
);

  // Notification Badge

  showBadge = signal(false);

  // Add Product

  add(product: Product) {

    // Show notification badge

    this.showBadge.set(true);

    const items = this.cart();

    const existingItem =
      items.find(i => i.id === product.id);

    if (existingItem) {

      this.cart.update(items =>
        items.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

    } else {

      this.cart.update(items => [
        ...items,
        {
          ...product,
          quantity: 1
        }
      ]);

    }
  }

  // Increase Quantity

  increaseQty(index: number) {

    this.cart.update(items =>
      items.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  }

  // Decrease Quantity

  decreaseQty(index: number) {

    this.cart.update(items =>
      items
        .map((item, i) =>
          i === index
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  // Remove Item

  remove(index: number) {

    this.cart.update(items =>
      items.filter((_, i) => i !== index)
    );
  }

  // Total Price

  total = computed(() => {

    return this.cart().reduce(
      (sum, item) =>
        sum + (item.price * item.quantity),
      0
    );

  });

}