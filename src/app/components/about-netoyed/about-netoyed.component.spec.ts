import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNetoyedComponent } from './about-netoyed.component';

describe('AboutNetoyedComponent', () => {
  let component: AboutNetoyedComponent;
  let fixture: ComponentFixture<AboutNetoyedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutNetoyedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutNetoyedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
