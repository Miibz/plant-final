import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheAlternativeComponent } from './recherche-alternative.component';

describe('RechercheAlternativeComponent', () => {
  let component: RechercheAlternativeComponent;
  let fixture: ComponentFixture<RechercheAlternativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheAlternativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
