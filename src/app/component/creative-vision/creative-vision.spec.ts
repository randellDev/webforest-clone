import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeVision } from './creative-vision';

describe('CreativeVision', () => {
  let component: CreativeVision;
  let fixture: ComponentFixture<CreativeVision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreativeVision],
    }).compileComponents();

    fixture = TestBed.createComponent(CreativeVision);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
