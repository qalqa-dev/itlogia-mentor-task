import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Pizza {
  uid: string;
  imgUrl: string;
  name: string;
  ingredients: string[];
}

@Component({
  selector: 'app-catalog',
  imports: [CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  private getPizzasFromFakeBackend(): Pizza[] {
    return [
      {
        uid: '1',
        imgUrl: '/meat-deluxe.png', // представим, что это ссылка на S3, а в папке public ничего не лежит))
        name: 'Мясная Делюкс',
        ingredients: [
          'Пепперони',
          'Лук',
          'Бекон',
          'Томатная паста',
          'Колбаски',
          'Перец',
          'Грибы',
          'Соус чили',
          'Ананасы',
        ],
      },
      {
        uid: '2',
        imgUrl: '/sea-premium.png',
        name: 'Морская Премиум',
        ingredients: ['Перец', 'Сыр', 'Креветки', 'Кальмары', 'Мидии', 'Лосось'],
      },
      {
        uid: '3',
        imgUrl: '/bacon-sausages.png',
        name: 'Бекон и Сосиски',
        ingredients: ['Бекон', 'Сыр', 'Сосиски', 'Ананас', 'Томатная паста'],
      },
      {
        uid: '4',
        imgUrl: '/chicken-deluxe.png',
        name: 'Куриная Делюкс',
        ingredients: ['Курица', 'Ананас', 'Сыр Пепперони', 'Соус для пиццы', 'Томатная паста'],
      },
      {
        uid: '5',
        imgUrl: '/bbq-premium.png',
        name: 'Барбекю Премиум',
        ingredients: ['Свинина BBQ', 'Сыр Барбекю', 'Сыр', 'Курица', 'Соус для пиццы', 'Соус чили'],
      },
      {
        uid: '6',
        imgUrl: '/pepperoni-double.png',
        name: 'Пепперони Дабл',
        ingredients: ['Пепперони', 'Сыр', 'Колбаса 2 видов: обжаренная и вареная'],
      },
      {
        uid: '7',
        imgUrl: '/chicken-trio.png',
        name: 'Куриное трио',
        ingredients: [
          'Жареная курица',
          'Тушеная курица',
          'Куриные наггетсы',
          'Перец',
          'Сыр',
          'Грибы',
          'Соус для пиццы',
        ],
      },
      {
        uid: '8',
        imgUrl: '/cheese.png',
        name: 'Сырная',
        ingredients: ['Сыр Джюгас', 'Сыр с плесенью', 'Сыр Моцарелла', 'Сыр секретный'],
      },
    ];
    //P.S. - этот объект сгенерировал нейронкой т.к я не хочу это все переписывать руками
  }

  pizzas: Pizza[] = this.getPizzasFromFakeBackend();
}
