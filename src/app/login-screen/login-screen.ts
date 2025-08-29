import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login-screen',
  imports: [FormsModule],
  templateUrl: './login-screen.html',
  styleUrl: './login-screen.css',
})
export class LoginScreen {
  email: string = '';
  password = '';

  emailReg = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  passwrdReg = /^[0-9]{6}$/;

  constructor(private router: Router, private auth: Auth) {}

  loginHandler() {
    if (!this.email) {
      alert('Enter the Email');
      return;
    } else if (!this.emailReg.test(this.email)) {
      alert('Enter a valid Email!');
      return;
    }

    if (!this.password) {
      alert('Enter the Password');
      return;
    } else if (!this.passwrdReg.test(this.password)) {
      alert('Password must be exactly 6 digits!');
      return;
    }

    if (this.emailReg.test(this.email) && this.passwrdReg.test(this.password)) {
      alert('login Successfull');
    }

    this.auth.login();

    this.router.navigate(['/dashboard']);
  }

  protected readonly title = signal('login-screen');
}
