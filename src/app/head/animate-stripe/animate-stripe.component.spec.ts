import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateStripeComponent } from './animate-stripe.component';

describe('AnimateStripeComponent', () => {
  let component: AnimateStripeComponent;
  let fixture: ComponentFixture<AnimateStripeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimateStripeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimateStripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
