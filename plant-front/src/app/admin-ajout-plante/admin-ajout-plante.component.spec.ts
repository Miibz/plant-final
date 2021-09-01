import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAjoutPlanteComponent } from './admin-ajout-plante.component';

describe('AdminAjoutPlanteComponent', () => {
  let component: AdminAjoutPlanteComponent;
  let fixture: ComponentFixture<AdminAjoutPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAjoutPlanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAjoutPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
