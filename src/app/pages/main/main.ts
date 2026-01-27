import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Catalog } from './sections/catalog/catalog';
import { Form } from './sections/form/form';
import { Hero } from './sections/hero/hero';

@Component({
  selector: 'app-main',
  imports: [Header, Hero, Catalog, Form],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
