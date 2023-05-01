import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserMainComponent } from './teaser-main.component';

describe('TeaserMainComponent', () => {
  let component: TeaserMainComponent;
  let fixture: ComponentFixture<TeaserMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaserMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaserMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
