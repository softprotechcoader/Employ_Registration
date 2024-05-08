import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployRegistrationComponent } from './employ-registration.component';

describe('EmployRegistrationComponent', () => {
  let component: EmployRegistrationComponent;
  let fixture: ComponentFixture<EmployRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
