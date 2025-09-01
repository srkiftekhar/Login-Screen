import { Component } from '@angular/core';
import {
  RouterLink,
  RouterOutlet,
  RouterLinkActive,
  Router,
  NavigationEnd,
} from '@angular/router';
import { Auth } from './services/auth';
import { CommonModule, NgIf } from '@angular/common';
// import { LogoutDialog } from './logout-dialog/logout-dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
// import { NgIf } from '../../node_modules/@angular/common/common_module.d';
// import { Auth } from './services/auth';
import { filter } from 'rxjs/operators';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    MatDialogModule,
    Menu,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  isLoginRoute = false;

  constructor(
    public auth: Auth,
    private router: Router // private dialog: MatDialog
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isLoginRoute = event.urlAfterRedirects === '/';
      });
  }

  // logout() {
  //   const dialogRef = this.dialog.open(LogoutDialog);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result === 'confirm') {
  //       this.auth.logout();
  //       this.router.navigate(['/']);
  //     }
  //   });
  // }

  logout() {
    const confirmed = confirm('Are you sure you want to logout?');
    if (confirmed) {
      console.log('User logged out');
      this.router.navigate(['/']);
    }
  }
}
