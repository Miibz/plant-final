import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageDetailPlanteComponent } from './affichage-detail-plante.component';

describe('AffichageDetailPlanteComponent', () => {
  let component: AffichageDetailPlanteComponent;
  let fixture: ComponentFixture<AffichageDetailPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageDetailPlanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageDetailPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
