import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() class: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
}
