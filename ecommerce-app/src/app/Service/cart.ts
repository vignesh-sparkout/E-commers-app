import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //Add product
    cart = signal<any[]>([]);
    add(product: any) {
    this.cart.update(items => [...items, product]);
  }
// remove Product
  remove(index: number) {
    this.cart.update(items => items.filter((_, i) => i !== index));
  }

}
