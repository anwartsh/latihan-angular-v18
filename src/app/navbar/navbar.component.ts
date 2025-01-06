import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navItems = [
    {
      name: "Home",
      url: "/home"
    },
    {
      name: "Blog",
      url: "/blog"
    },
  ]
}
