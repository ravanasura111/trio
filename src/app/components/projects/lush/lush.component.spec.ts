import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LushComponent } from './lush.component';

describe('LushComponent', () => {
  let component: LushComponent;
  let fixture: ComponentFixture<LushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
