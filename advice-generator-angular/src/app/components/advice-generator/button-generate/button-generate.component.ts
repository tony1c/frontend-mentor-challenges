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

  generateAdvice(): void {
    this.onGenerateAdvice.emit();
  }
}
