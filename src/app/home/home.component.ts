import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() testInput = ''

  items = new Array();

  addItem(item: string) {
    this.items.push(item)
  }

  name = "John Doe"
  canEdit = false
  imageUrl = "assets/images/pict.jpg"
  
  data = [
    {nim: "12210952", name: "John Does"},
    {nim: "45203568", name: "Angelina"},
    {nim: "98561025", name: "John Lennon"},
  ]

  editContent() {
    this.canEdit = !this.canEdit
  }

  onMouseOver() {
    this.name = "Awkwkwk, Ganti Nama! 😂"
  }

  onMouseLeft() {
    this.name = "John Doe"
  }

}
