import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  category: string;
  brand: string;
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
    category: 'Laptop',
    brand: 'Dell',
    name: 'Dell Inspiron',
    price: 55000,
    description: 'Dell laptop with i5 processor'
  },
    {
    id: 2,
    category: 'Laptop',
    brand: 'HP',
    name: 'HP Pavilion',
    price: 60000,
    description: 'HP laptop with Ryzen processor'
  },

  {
    id: 3,
    category: 'Laptop',
    brand: 'Lenovo',
    name: 'Lenovo IdeaPad',
    price: 50000,
    description: 'Lenovo slim laptop'
  },

  {
    id: 4,
    category: 'Mobile',
    brand: 'Samsung',
    name: 'Samsung Galaxys S15',
    price: 35000,
    description: 'Samsung 5G smartphone'
  },
    {
    id: 5,
    category: 'Mobile',
    brand: 'Vivo',
    name: 'Vivo v29',
    price: 38000,
    description: 'Latest Vivo smartphone'
  },

  {
    id: 6,
    category: 'Mobile',
    brand: 'Apple',
    name: 'iPhone 15',
    price: 80000,
    description: 'Latest Apple Iphone'
  },

  {
    id: 7,
    category: 'Watch',
    brand: 'Titan',
    name: 'Titan Smart Watch',
    price: 5000,
    description: 'Smart fitness watch'
  },
    {
    id: 8,
    category: 'Watch',
    brand: 'Apple',
    name: 'Apple Smart Watch',
    price: 20000,
    description: 'Smart watch with more Futures'
  }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
