import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuchnieComponent } from './kuchnie.component';

describe('KuchnieComponent', () => {
  let component: KuchnieComponent;
  let fixture: ComponentFixture<KuchnieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KuchnieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KuchnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
