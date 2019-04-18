import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DregistrationComponent } from './dregistration.component';

describe('DregistrationComponent', () => {
  let component: DregistrationComponent;
  let fixture: ComponentFixture<DregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
