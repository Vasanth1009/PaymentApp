import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCardNumber]',
})
export class CreditCardNumberDirective {
  constructor() {}

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    const numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');
  }
}

@Directive({
  selector: '[appCreditCardDate]',
})
export class CreditCardDateDirective {
  constructor() {}

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace('/', '');
    if (trimmed.length > 5) {
      trimmed = trimmed.substr(0, 4);
    }

    const numbers = [];
    for (let i = 0; i < trimmed.length; i += 2) {
      numbers.push(trimmed.substr(i, 2));
    }

    input.value = numbers.join('/');
  }
}
