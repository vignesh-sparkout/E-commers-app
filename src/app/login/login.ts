
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private router: Router) { }

  user = {
    email: '',
    password: ''
  };

  errorMessage = '';
  successMessage = '';

  onSubmit(form: any) {

    if (form.valid) {

      const storedUser = localStorage.getItem('registeredUser');

      if (storedUser) {

        const parsedUser = JSON.parse(storedUser);

        if (
          parsedUser.email === this.user.email &&
          parsedUser.password === this.user.password
        ) {

          localStorage.setItem('token', 'abc123');

          this.successMessage = 'Login Successful';

          setTimeout(() => {

            this.successMessage = '';

            this.router.navigate(['/products']);

          }, 1000);

        } else {

          this.errorMessage = 'Invalid email or password';
        }
      }
    }
  }
}