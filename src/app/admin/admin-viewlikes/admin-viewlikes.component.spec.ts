import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewlikesComponent } from './admin-viewlikes.component';

describe('AdminViewlikesComponent', () => {
  let component: AdminViewlikesComponent;
  let fixture: ComponentFixture<AdminViewlikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewlikesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminViewlikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
