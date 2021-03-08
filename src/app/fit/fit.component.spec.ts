import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FITComponent } from './fit.component';

describe('FITComponent', () => {
  let component: FITComponent;
  let fixture: ComponentFixture<FITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FITComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
