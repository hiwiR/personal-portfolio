import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpTimelineComponent } from './exp-timeline.component';

describe('ExpTimelineComponent', () => {
  let component: ExpTimelineComponent;
  let fixture: ComponentFixture<ExpTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
