import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationLineComponent } from "./IrrigationLineComponent";

describe('IrrigationLineComponent', () => {
  let component: IrrigationLineComponent;
  let fixture: ComponentFixture<IrrigationLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrrigationLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrigationLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
