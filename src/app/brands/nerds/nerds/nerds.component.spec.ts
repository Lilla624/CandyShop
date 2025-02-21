import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NerdsComponent } from './nerds.component';

describe('NerdsComponent', () => {
  let component: NerdsComponent;
  let fixture: ComponentFixture<NerdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NerdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NerdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
