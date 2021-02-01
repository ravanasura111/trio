import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenmouldComponent } from './openmould.component';

describe('OpenmouldComponent', () => {
  let component: OpenmouldComponent;
  let fixture: ComponentFixture<OpenmouldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenmouldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenmouldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
