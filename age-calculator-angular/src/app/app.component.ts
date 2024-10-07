import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgeDisplayComponent } from './components/age-display/age-display.component';
import { AgeFormComponent } from './components/age-form/age-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgeDisplayComponent, AgeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'age-calculator-angular';

  public log(): void {
    console.log('clicked');
  }
}
