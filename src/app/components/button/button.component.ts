import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() valueButton = ''

  // @Output() addItemEvent = new EventEmitter<string>()

  // addItem() {
  //   this.addItemEvent.emit('🐢')
  // }
}
