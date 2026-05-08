import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  standalone:true,
  selector: 'app-header',
  imports: [RouterModule,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(private router: Router,private toastr: ToastrService) {}

  logout() {

    localStorage.removeItem('token');

    this.toastr.success(
      'Logged Out Successfully',
      'Success'
    );

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }

  isLoggedIn() {
  return !!localStorage.getItem('token');
}
}
