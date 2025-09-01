import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [MatMenuModule, MatIconModule, MatButtonModule, NgIf, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  constructor(private router: Router, public auth: Auth) {}

  onOptionChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;

    if (value === 'logout') {
      this.auth.logout();
    } else if (value) {
      this.router.navigate([`/${value}`]);
    }
  }
}
