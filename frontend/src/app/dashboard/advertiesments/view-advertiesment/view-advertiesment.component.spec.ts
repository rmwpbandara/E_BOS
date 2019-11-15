import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdvertiesmentComponent } from './view-advertiesment.component';

describe('ViewAdvertiesmentComponent', () => {
  let component: ViewAdvertiesmentComponent;
  let fixture: ComponentFixture<ViewAdvertiesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAdvertiesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdvertiesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
