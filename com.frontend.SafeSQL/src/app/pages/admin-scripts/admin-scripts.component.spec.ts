import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScriptsComponent } from './admin-scripts.component';

describe('AdminScriptsComponent', () => {
  let component: AdminScriptsComponent;
  let fixture: ComponentFixture<AdminScriptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminScriptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
