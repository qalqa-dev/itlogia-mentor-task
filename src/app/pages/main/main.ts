import { Component } from '@angular/core';
import { Catalog } from './sections/catalog/catalog';
import { Form } from './sections/form/form';
import { Hero } from './sections/hero/hero';

@Component({
  selector: 'app-main',
  imports: [Hero, Catalog, Form],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
