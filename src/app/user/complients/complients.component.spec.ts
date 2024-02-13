import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplientsComponent } from './complients.component';

describe('ComplientsComponent', () => {
  let component: ComplientsComponent;
  let fixture: ComponentFixture<ComplientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
