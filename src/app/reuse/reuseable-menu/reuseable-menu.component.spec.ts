import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseableMenuComponent } from './reuseable-menu.component';

describe('ReuseableMenuComponent', () => {
  let component: ReuseableMenuComponent;
  let fixture: ComponentFixture<ReuseableMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuseableMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
