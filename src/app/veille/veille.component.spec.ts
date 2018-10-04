import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeilleComponent } from './veille.component';

describe('VeilleComponent', () => {
  let component: VeilleComponent;
  let fixture: ComponentFixture<VeilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
