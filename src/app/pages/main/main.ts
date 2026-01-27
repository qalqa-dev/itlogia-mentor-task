import { Component } from '@angular/core';
import { Catalog } from '@pages/main/sections/catalog/catalog';
import { Form } from '@pages/main/sections/form/form';
import { Hero } from '@pages/main/sections/hero/hero';

@Component({
  selector: 'app-main',
  imports: [Hero, Catalog, Form],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
