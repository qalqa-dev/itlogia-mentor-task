import { Component, Input } from '@angular/core';
import { Pizza } from '../../model/pizza';
import { Button } from '../button/button';

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
}
