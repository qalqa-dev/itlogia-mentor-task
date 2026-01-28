import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@components/header/header';
import { Popup } from '@components/popup/popup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Popup],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('app');
}
