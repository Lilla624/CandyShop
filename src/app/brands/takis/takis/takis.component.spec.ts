import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakisComponent } from './takis.component';

describe('TakisComponent', () => {
  let component: TakisComponent;
  let fixture: ComponentFixture<TakisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TakisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
