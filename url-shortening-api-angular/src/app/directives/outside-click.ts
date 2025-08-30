import {
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  OnInit,
  output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appOutsideClick]',
})
export class OutsideClick implements OnInit, OnDestroy {
  appOutsideClick = input.required<boolean>();
  outSideClick = output();
  #el = inject(ElementRef);
  #renderer = inject(Renderer2);
  #listener: (() => void) | undefined;

  onDocumentClick = (event: Event) => {
    if (!this.#el.nativeElement || !event.target) {
      return;
    }

    console.log(`${event.target}, ${this.#el.nativeElement}`);
    if (!this.#el.nativeElement.contains(event.target)) {
      console.log('Emitting');
      this.outSideClick.emit();
    }
  };

  ngOnInit(): void {
    this.#listener = this.#renderer.listen('document', 'click', this.onDocumentClick);
  }

  ngOnDestroy(): void {
    if (this.#listener) {
      this.#listener();
    }
  }
}
