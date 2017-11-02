import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mailer1Component } from './mailer1.component';

describe('Mailer1Component', () => {
  let component: Mailer1Component;
  let fixture: ComponentFixture<Mailer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mailer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mailer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
