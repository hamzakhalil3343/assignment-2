import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesubjectPage } from './singlesubject.page';

describe('SinglesubjectPage', () => {
  let component: SinglesubjectPage;
  let fixture: ComponentFixture<SinglesubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglesubjectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglesubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
