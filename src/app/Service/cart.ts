import { Injectable, signal, computed } from '@angular/core';
import { Product } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  cart = signal<Product[]>([]);

  add(product: Product) {
    this.cart.update(items => [...items, product]);
  }
// total Calculate
  total = computed(() => {

  return this.cart().reduce(
    (sum, item) => sum + item.price,
    0
  );

});

// remove item from cart
  remove(index: number) {
    this.cart.update(items =>
      items.filter((_, i) => i !== index)
    );
  }
}