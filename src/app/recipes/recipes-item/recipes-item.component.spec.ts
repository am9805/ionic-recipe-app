import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesItemPage } from './recipes-item.page';

describe('RecipesItemPage', () => {
  let component: RecipesItemPage;
  let fixture: ComponentFixture<RecipesItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
