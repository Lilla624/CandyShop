import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarheadsComponent } from './warheads.component';

describe('WarheadsComponent', () => {
  let component: WarheadsComponent;
  let fixture: ComponentFixture<WarheadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarheadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarheadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
