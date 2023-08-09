import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphics } from './graphics.component';

describe('LineChartComponent', () => {
  let component: Graphics;
  let fixture: ComponentFixture<Graphics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphics ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Graphics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
