import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pathogenviewmodify.DialogComponent } from './pathogenviewmodify.dialog.component';

describe('Pathogenviewmodify.DialogComponent', () => {
  let component: Pathogenviewmodify.DialogComponent;
  let fixture: ComponentFixture<Pathogenviewmodify.DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pathogenviewmodify.DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pathogenviewmodify.DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
