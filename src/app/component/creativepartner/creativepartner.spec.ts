import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creativepartner } from './creativepartner';

describe('Creativepartner', () => {
  let component: Creativepartner;
  let fixture: ComponentFixture<Creativepartner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Creativepartner],
    }).compileComponents();

    fixture = TestBed.createComponent(Creativepartner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
