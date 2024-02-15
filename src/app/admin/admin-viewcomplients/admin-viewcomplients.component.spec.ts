import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewcomplientsComponent } from './admin-viewcomplients.component';

describe('AdminViewcomplientsComponent', () => {
  let component: AdminViewcomplientsComponent;
  let fixture: ComponentFixture<AdminViewcomplientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewcomplientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminViewcomplientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
