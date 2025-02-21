import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheetosComponent } from './cheetos.component';

describe('CheetosComponent', () => {
  let component: CheetosComponent;
  let fixture: ComponentFixture<CheetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
