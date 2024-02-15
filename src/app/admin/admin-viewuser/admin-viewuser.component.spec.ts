import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewuserComponent } from './admin-viewuser.component';

describe('AdminViewuserComponent', () => {
  let component: AdminViewuserComponent;
  let fixture: ComponentFixture<AdminViewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminViewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
