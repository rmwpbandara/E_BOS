import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvertiesmentComponent } from './add-advertiesment.component';

describe('AddAdvertiesmentComponent', () => {
  let component: AddAdvertiesmentComponent;
  let fixture: ComponentFixture<AddAdvertiesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdvertiesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvertiesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
