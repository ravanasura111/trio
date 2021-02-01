import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindtoolComponent } from './windtool.component';

describe('WindtoolComponent', () => {
  let component: WindtoolComponent;
  let fixture: ComponentFixture<WindtoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindtoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
