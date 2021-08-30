import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonJardinComponent } from './mon-jardin.component';

describe('MonJardinComponent', () => {
  let component: MonJardinComponent;
  let fixture: ComponentFixture<MonJardinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonJardinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonJardinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
