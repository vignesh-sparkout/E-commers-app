import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

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
}