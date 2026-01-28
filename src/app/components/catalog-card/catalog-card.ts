import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '@components/button/button';
import { Pizza } from '@model/pizza';

@Component({
  selector: 'app-catalog-card',
  imports: [Button],
  templateUrl: './catalog-card.html',
  styleUrl: './catalog-card.scss',
})
export class CatalogCard {
  @Input() pizza: Pizza = {
    uid: '',
    imgUrl: '',
    name: '',
    ingredients: [],
  };

  @Output() imageClick = new EventEmitter<{ imgUrl: string; name: string }>();

  onImageClick(): void {
    this.imageClick.emit({
      imgUrl: this.pizza.imgUrl,
      name: this.pizza.name,
    });
  }
}
