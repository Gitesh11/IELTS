import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BformComponent } from './bform.component';

describe('BformComponent', () => {
  let component: BformComponent;
  let fixture: ComponentFixture<BformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
