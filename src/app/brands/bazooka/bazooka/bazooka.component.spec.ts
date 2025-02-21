import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BazookaComponent } from './bazooka.component';

describe('BazookaComponent', () => {
  let component: BazookaComponent;
  let fixture: ComponentFixture<BazookaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BazookaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BazookaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
