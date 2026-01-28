import { Injectable } from '@angular/core';
import { PopupMessage } from '@model/interfaceMessage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private popups$ = new BehaviorSubject<PopupMessage[]>([]);
  private nextId = 1;
  private readonly AUTO_CLOSE_DELAY = 3000;

  getPopups() {
    return this.popups$.asObservable();
  }

  show(message: string): void {
    const newPopup: PopupMessage = {
      id: this.nextId++,
      message,
      isClosing: false,
    };

    const currentPopups = this.popups$.value;
    this.popups$.next([...currentPopups, newPopup]);

    setTimeout(() => {
      this.close(newPopup.id);
    }, this.AUTO_CLOSE_DELAY);
  }

  close(id: number): void {
    const currentPopups = this.popups$.value;
    const popup = currentPopups.find((p) => p.id === id);

    if (popup && !popup.isClosing) {
      popup.isClosing = true;
      this.popups$.next([...currentPopups]);

      setTimeout(() => {
        const updatedPopups = this.popups$.value.filter((p) => p.id !== id);
        this.popups$.next(updatedPopups);
      }, 300);
    }
  }
}
