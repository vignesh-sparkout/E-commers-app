import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../service/cart';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone:true,
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(public cartService: CartService,  private toastr: ToastrService) {}

removeItem(index:number){

  this.cartService.remove(index);

  this.toastr.info(
    'Product Removed',
    'Cart'
  );
}
}
