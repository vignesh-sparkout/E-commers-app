import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';



export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

    {
    path: 'login',
    loadComponent: () =>
      import('./login/login')
        .then(m => m.Login)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./register/register')
          .then(m=> m.Register)
  },
 
  {
    path: 'products',
    canActivate:[authGuard],
    loadComponent: () =>
      import('./product-list/product-list')
        .then(m => m.ProductList)
  },

  {
    path: 'product/:id',
     canActivate:[authGuard],
    loadComponent: () =>
      import('./product-detail/product-detail')
        .then(m => m.ProductDetail)
  },

  {
    path: 'cart',
    canActivate:[authGuard],
    loadComponent: () =>
      import('./cart/cart')
        .then(m => m.Cart)
  },
  {
  path: 'category/:name',
  loadComponent: () =>
    import('./category-products/category-products')
      .then(m => m.CategoryProducts)
},



];
