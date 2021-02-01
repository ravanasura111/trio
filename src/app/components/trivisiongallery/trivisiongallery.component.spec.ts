import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrivisiongalleryComponent } from './trivisiongallery.component';

describe('TrivisiongalleryComponent', () => {
  let component: TrivisiongalleryComponent;
  let fixture: ComponentFixture<TrivisiongalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrivisiongalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrivisiongalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
