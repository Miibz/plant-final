import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosVegetauxComponent } from './nos-vegetaux.component';

describe('NosVegetauxComponent', () => {
  let component: NosVegetauxComponent;
  let fixture: ComponentFixture<NosVegetauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosVegetauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosVegetauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
