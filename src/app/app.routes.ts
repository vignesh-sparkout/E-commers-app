import { Routes } from '@angular/router';



export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },

  {
    path: 'products',
    loadComponent: () =>
      import('./product-list/product-list')
        .then(m => m.ProductList)
  },

  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product-detail/product-detail')
        .then(m => m.ProductDetail)
  },

  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart')
        .then(m => m.Cart)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./login/login')
        .then(m => m.Login)
  }
];
