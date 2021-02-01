import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterslideComponent } from './waterslide.component';

describe('WaterslideComponent', () => {
  let component: WaterslideComponent;
  let fixture: ComponentFixture<WaterslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterslideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
