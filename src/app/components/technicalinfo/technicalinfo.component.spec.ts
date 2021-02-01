import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalinfoComponent } from './technicalinfo.component';

describe('TechnicalinfoComponent', () => {
  let component: TechnicalinfoComponent;
  let fixture: ComponentFixture<TechnicalinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
