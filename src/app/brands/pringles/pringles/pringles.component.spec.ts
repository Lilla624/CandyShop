import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PringlesComponent } from './pringles.component';

describe('PringlesComponent', () => {
  let component: PringlesComponent;
  let fixture: ComponentFixture<PringlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PringlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PringlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
