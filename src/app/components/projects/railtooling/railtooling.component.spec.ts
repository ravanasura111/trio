import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailtoolingComponent } from './railtooling.component';

describe('RailtoolingComponent', () => {
  let component: RailtoolingComponent;
  let fixture: ComponentFixture<RailtoolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RailtoolingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RailtoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
