import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit{
  
  constructor(private route:ActivatedRoute){}
  id:any;
  ngOnInit() {
  this.id = this.route.snapshot.paramMap.get('id');
}
}
