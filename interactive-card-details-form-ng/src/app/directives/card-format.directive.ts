import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appCardFormatDirective]',
})
export class CardFormatDirective {
  #el = inject(ElementRef);

  private format(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(.{4})/g, '$1 ').trim();
  }

  @HostListener('input')
  onInput() {
    const input = this.#el.nativeElement;
    const raw = input.value;
    const caret = input.selectionStart ?? raw.length;
    const digitsBefore = raw.slice(0, caret).replace(/\D/g, '').length;

    input.value = this.format(raw);

    const newPos = digitsBefore + Math.floor(digitsBefore / 4);
    input.setSelectionRange(newPos, newPos);
  }
}
