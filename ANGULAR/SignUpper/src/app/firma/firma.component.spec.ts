import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaComponent } from './firma.component';

describe('FirmaComponent', () => {
  let component: FirmaComponent;
  let fixture: ComponentFixture<FirmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
