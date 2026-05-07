import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../Service/cart';
import { Product, ProductService } from '../Service/product.service';

@Component({
  standalone: true,
  selector: 'app-product-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.add(product);
    alert('Added to cart');
  }
}
