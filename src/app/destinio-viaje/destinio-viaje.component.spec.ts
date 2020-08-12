import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinioViajeComponent } from './destinio-viaje.component';

describe('DestinioViajeComponent', () => {
  let component: DestinioViajeComponent;
  let fixture: ComponentFixture<DestinioViajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinioViajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinioViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
