import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkittlesComponent } from './skittles.component';

describe('SkittlesComponent', () => {
  let component: SkittlesComponent;
  let fixture: ComponentFixture<SkittlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkittlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkittlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
