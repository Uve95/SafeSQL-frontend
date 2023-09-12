import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOKComponent } from './report-ok.component';

describe('ReportOKComponent', () => {
  let component: ReportOKComponent;
  let fixture: ComponentFixture<ReportOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportOKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
