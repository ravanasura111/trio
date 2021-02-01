import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepeComponent } from './prepe.component';

describe('PrepeComponent', () => {
  let component: PrepeComponent;
  let fixture: ComponentFixture<PrepeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
