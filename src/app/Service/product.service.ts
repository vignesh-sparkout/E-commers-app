import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 50000,
      description: 'High performance laptop'
    },
    {
      id: 2,
      name: 'Mobile',
      price: 20000,
      description: 'Latest smartphone'
    }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
