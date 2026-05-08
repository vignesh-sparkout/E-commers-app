import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  constructor(private router: Router, private toastr: ToastrService) { }

  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  passwordMismatch = false;
  onSubmit(form: any) {
    this.passwordMismatch = false
    if (this.user.password !== this.user.confirmPassword) {
      this.passwordMismatch = true;
      return
    }

    const existingUser =
      localStorage.getItem('registeredUser');

    if (existingUser) {

      const parsedUser = JSON.parse(existingUser);

      if (parsedUser.email === this.user.email) {

        this.toastr.error(
          'Email Already Registered',
          'Error'
        );

        return;
      }
    }

    if (form.valid) {
      localStorage.setItem(
        'registeredUser', JSON.stringify(this.user)
      )
      this.toastr.success(
        'Registration Successful',
        'Success'
      );
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000);
    }
  }
}
