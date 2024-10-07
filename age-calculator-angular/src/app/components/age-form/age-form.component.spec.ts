import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeFormComponent } from './age-form.component';

describe('AgeFormComponent', () => {
  let component: AgeFormComponent;
  let fixture: ComponentFixture<AgeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
