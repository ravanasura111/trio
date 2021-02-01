import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrtmComponent } from './lrtm.component';

describe('LrtmComponent', () => {
  let component: LrtmComponent;
  let fixture: ComponentFixture<LrtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrtmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LrtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
