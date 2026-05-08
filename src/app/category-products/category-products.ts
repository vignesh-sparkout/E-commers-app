import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { Product, ProductService } from '../service/product.service';

@Component({
  standalone: true,
  selector: 'app-category-products',
  imports: [CommonModule, RouterModule],
  templateUrl: './category-products.html',
  styleUrl: './category-products.css',
})
export class CategoryProducts implements OnInit {

  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {

    const category =
      this.route.snapshot.paramMap.get('name');

    this.products =
      this.productService
          .getProducts()
          .filter(p => p.category === category);
  }
}