import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseableMenuExampleComponent } from './reuseable-menu-example.component';

describe('ReuseableMenuExampleComponent', () => {
  let component: ReuseableMenuExampleComponent;
  let fixture: ComponentFixture<ReuseableMenuExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuseableMenuExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseableMenuExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
