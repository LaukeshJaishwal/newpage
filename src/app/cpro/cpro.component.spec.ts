import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CproComponent } from './cpro.component';

describe('CproComponent', () => {
  let component: CproComponent;
  let fixture: ComponentFixture<CproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
