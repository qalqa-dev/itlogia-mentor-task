import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMobile = false;
  isMenuOpen = false;

  constructor() {
    this.updateLayoutMode();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.updateLayoutMode();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  private updateLayoutMode(): void {
    this.isMobile = window.innerWidth < 992;

    if (!this.isMobile) {
      this.isMenuOpen = false;
    }
  }
}
