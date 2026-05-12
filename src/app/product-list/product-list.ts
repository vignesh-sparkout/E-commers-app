import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-product-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  categories = [
     {
      name: 'Laptop',
      image: '/Images/Laptop.avif'
    },
    {
      name: 'Mobile',
      image: 'Images/mobile.webp'
    },
    {
      name: 'Watch',
      image: 'Images/watch.jpg'
    }
  ];

}