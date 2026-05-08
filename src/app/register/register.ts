import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  standalone:true,
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  constructor(private router:Router){}

  user = {
    name: '',
    email:'',
    password:'',
    confirmPassword:''
  }
  passwordMismatch = false;
  successMessage = '';
  onSubmit(form:any){
    this.passwordMismatch = false
      if(this.user.password !== this.user.confirmPassword){
      this.passwordMismatch =true;
      return
      }

    if(form.valid){
    localStorage.setItem(
      'registeredUser', JSON.stringify(this.user)
    )
   this.successMessage = 'Registration Successful';

setTimeout(() => {

  this.successMessage = '';

  this.router.navigate(['/login']);

}, 1000);
    }
  }
}
