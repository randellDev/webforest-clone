import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsExpertise } from './tools-expertise';

describe('ToolsExpertise', () => {
  let component: ToolsExpertise;
  let fixture: ComponentFixture<ToolsExpertise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsExpertise],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolsExpertise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
