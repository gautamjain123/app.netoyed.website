import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedCaseStudiesComponent } from './expanded-case-studies.component';

describe('ExpandedCaseStudiesComponent', () => {
  let component: ExpandedCaseStudiesComponent;
  let fixture: ComponentFixture<ExpandedCaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandedCaseStudiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpandedCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
