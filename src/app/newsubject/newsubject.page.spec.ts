import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsubjectPage } from './newsubject.page';

describe('NewsubjectPage', () => {
  let component: NewsubjectPage;
  let fixture: ComponentFixture<NewsubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsubjectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
