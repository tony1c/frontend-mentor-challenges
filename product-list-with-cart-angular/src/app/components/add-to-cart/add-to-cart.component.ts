import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart.component.html',
  styles: ``,
})
export class AddToCartComponent {
  @Output() productAdded = new EventEmitter<void>();

  onAddProduct(): void {
    this.productAdded.emit();
  }
}
