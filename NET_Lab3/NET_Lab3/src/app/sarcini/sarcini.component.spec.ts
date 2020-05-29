import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarciniComponent } from './sarcini.component';

describe('SarciniComponent', () => {
  let component: SarciniComponent;
  let fixture: ComponentFixture<SarciniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarciniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarciniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
