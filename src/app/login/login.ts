
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private router: Router, private toastr: ToastrService) { }

  user = {
    email: '',
    password: ''
  };



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


          this.toastr.success(
            'Login Successful',
            'Success'
          );
          setTimeout(() => {
            this.router.navigate(['/products']);
          }, 1000);
        } else {
          this.toastr.error(
            'Invalid Email or Password',
            'Login Failed')
        }
      }
    }
  }
}