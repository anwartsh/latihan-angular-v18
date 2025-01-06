import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuestComponent } from './guest/guest.component';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    // HomeComponent,
    GuestComponent,
    // BlogComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'latihan-v18';
  name = "John Doe"
  isLoggedIn = false;

  authentication() {
    this.isLoggedIn = !this.isLoggedIn
  }
}
