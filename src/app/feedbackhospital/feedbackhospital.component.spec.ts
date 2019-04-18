import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackhospitalComponent } from './feedbackhospital.component';

describe('FeedbackhospitalComponent', () => {
  let component: FeedbackhospitalComponent;
  let fixture: ComponentFixture<FeedbackhospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackhospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
