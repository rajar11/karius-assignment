import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathogennewComponent } from './pathogennew.component';

describe('PathogennewComponent', () => {
  let component: PathogennewComponent;
  let fixture: ComponentFixture<PathogennewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathogennewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathogennewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
