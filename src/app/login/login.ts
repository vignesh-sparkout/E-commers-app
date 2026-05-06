import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  standalone:true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

 constructor (private router:Router){}

  user = {
    name:'',
    email:''
  }

  onSubmit(form: any) {
    if (form.valid) {

      // fake token (simulate login)
      localStorage.setItem('token', 'abc123');

      alert('Login Successful ');

      // redirect
      this.router.navigate(['/products']);
    }
  }

}