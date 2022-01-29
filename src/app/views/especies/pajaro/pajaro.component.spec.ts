import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PajaroComponent } from './pajaro.component';

describe('PajaroComponent', () => {
  let component: PajaroComponent;
  let fixture: ComponentFixture<PajaroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PajaroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PajaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
