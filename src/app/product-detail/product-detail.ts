import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { Product, ProductService } from '../Service/product.service';
import { CartService } from '../Service/cart';

@Component({
  standalone: true,
  selector: 'app-product-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {

  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.product = this.productService.getProductById(id);
  }

  addToCart() {
    if(this.product){
      this.cartService.add(this.product);
      alert('Added to cart');
    }
  }
}