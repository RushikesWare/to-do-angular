import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdminUserComponent } from './all-admin-user.component';

describe('AllAdminUserComponent', () => {
  let component: AllAdminUserComponent;
  let fixture: ComponentFixture<AllAdminUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAdminUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
