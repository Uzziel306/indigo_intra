import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivesComponent } from './objetives.component';

describe('ObjetivesComponent', () => {
  let component: ObjetivesComponent;
  let fixture: ComponentFixture<ObjetivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
