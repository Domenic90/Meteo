import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CittaPrincipaliComponent } from './citta-principali.component';

describe('CittaPrincipaliComponent', () => {
  let component: CittaPrincipaliComponent;
  let fixture: ComponentFixture<CittaPrincipaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CittaPrincipaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CittaPrincipaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
