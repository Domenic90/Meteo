import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitoloCentraleComponent } from './titolo-centrale.component';

describe('TitoloCentraleComponent', () => {
  let component: TitoloCentraleComponent;
  let fixture: ComponentFixture<TitoloCentraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitoloCentraleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitoloCentraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
