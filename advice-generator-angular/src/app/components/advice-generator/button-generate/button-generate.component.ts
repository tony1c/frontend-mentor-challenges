import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-generate',
  standalone: true,
  imports: [],
  templateUrl: './button-generate.component.html',
  styles: ``,
})
export class ButtonGenerateComponent {
  @Output() onGenerateAdvice = new EventEmitter<void>();

  public generateAdvice() {
    this.onGenerateAdvice.emit();
  }
}
