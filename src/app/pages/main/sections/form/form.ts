import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '@components/button/button';
import { PopupService } from '@components/popup/popup.service';

@Component({
  selector: 'app-form',
  imports: [Button, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  orderForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private popupService: PopupService,
  ) {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.pattern(/^[\d\s\+\-\(\)]+$/)]],
    });
  }

  onNameInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    const sanitizedValue = value.replace(/\./g, '');

    if (value !== sanitizedValue) {
      input.value = sanitizedValue;
      this.orderForm.get('name')?.setValue(sanitizedValue, { emitEvent: false });
    }
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      console.log('Форма отправлена:', this.orderForm.value);
      this.popupService.show('Спасибо за заказ!');
      this.orderForm.reset();
    } else {
      Object.keys(this.orderForm.controls).forEach((key) => {
        this.orderForm.get(key)?.markAsTouched();
      });
    }
  }
}
