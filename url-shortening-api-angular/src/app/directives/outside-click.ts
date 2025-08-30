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

    if (!this.#el.nativeElement.contains(event.target)) {
      this.outSideClick.emit();
    }
  };

  ngOnInit(): void {
    this.#listener = this.#renderer.listen('document', 'click', this.onDocumentClick);
  }

  // When calling the listener on destroy, you're calling the cleanup function to remove the event listener in order to prevent memory leaks.
  ngOnDestroy(): void {
    if (this.#listener) {
      this.#listener();
    }
  }
}
