import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolkaComponent } from './kolka.component';

describe('KolkaComponent', () => {
  let component: KolkaComponent;
  let fixture: ComponentFixture<KolkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KolkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KolkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
