import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringservicesComponent } from './engineeringservices.component';

describe('EngineeringservicesComponent', () => {
  let component: EngineeringservicesComponent;
  let fixture: ComponentFixture<EngineeringservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeringservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
