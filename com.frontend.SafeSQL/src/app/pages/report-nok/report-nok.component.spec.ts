import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNOKComponent } from './report-nok.component';

describe('ReportNOKComponent', () => {
  let component: ReportNOKComponent;
  let fixture: ComponentFixture<ReportNOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportNOKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportNOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
