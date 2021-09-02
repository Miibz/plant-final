import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifierPlanteComponent } from './admin-modifier-plante.component';

describe('AdminModifierPlanteComponent', () => {
  let component: AdminModifierPlanteComponent;
  let fixture: ComponentFixture<AdminModifierPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModifierPlanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModifierPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
