import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchodyComponent } from './schody.component';

describe('SchodyComponent', () => {
  let component: SchodyComponent;
  let fixture: ComponentFixture<SchodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
