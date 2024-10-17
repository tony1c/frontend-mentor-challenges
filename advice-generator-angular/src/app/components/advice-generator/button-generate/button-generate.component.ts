import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button-generate',
  standalone: true,
  imports: [],
  templateUrl: './button-generate.component.html',
  styles: ``,
})
export class ButtonGenerateComponent {
  @Output() onGenerateAdvice = new EventEmitter<void>();

  // Reset button focus on mobile after 3 seconds when clicked
  elRef = inject(ElementRef);
  timeoutId: ReturnType<typeof setTimeout> | null = null;
  @HostListener('click') onClick() {
    this.timeoutId = setTimeout(() => {
      console.log(this.elRef);
      this.elRef.nativeElement.blur();
    }, 3000);

    if (this.timeoutId) {
      clearInterval(this.timeoutId);
    }
  }

  generateAdvice(): void {
    this.onGenerateAdvice.emit();
  }
}
