import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plus2Component } from './plus2.component';

describe('Plus2Component', () => {
  let component: Plus2Component;
  let fixture: ComponentFixture<Plus2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plus2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Plus2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
