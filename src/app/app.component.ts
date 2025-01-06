import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { GuestComponent } from './pages/guest/guest.component';
// import { BlogComponent } from './pages/blog/blog.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    // NavbarComponent,
    // HomeComponent,
    // GuestComponent,
    // BlogComponent
    ButtonComponent,
    ContainerComponent
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
