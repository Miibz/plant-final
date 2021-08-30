import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DejaPlanteComponent } from './deja-plante.component';

describe('DejaPlanteComponent', () => {
  let component: DejaPlanteComponent;
  let fixture: ComponentFixture<DejaPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DejaPlanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DejaPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
