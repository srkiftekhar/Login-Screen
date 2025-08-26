import { Routes } from '@angular/router';
import { LoginScreen } from './login-screen/login-screen';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', component: LoginScreen },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
];
