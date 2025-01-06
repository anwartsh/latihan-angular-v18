import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Output() addItemEvent = new EventEmitter<string>()

  addItem() {
    this.addItemEvent.emit('🐢')
  }
}
