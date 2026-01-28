import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PopupMessage } from '@model/interfaceMessage';
import { Observable } from 'rxjs';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-popup',
  imports: [CommonModule],
  templateUrl: './popup.html',
  styleUrl: './popup.scss',
})
export class Popup implements OnInit {
  popups$!: Observable<PopupMessage[]>;

  constructor(private popupService: PopupService) {}

  ngOnInit(): void {
    this.popups$ = this.popupService.getPopups();
  }

  onPopupClick(id: number): void {
    this.popupService.close(id);
  }
}
