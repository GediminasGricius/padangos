import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotexistsComponent } from './notexists.component';

describe('NotexistsComponent', () => {
  let component: NotexistsComponent;
  let fixture: ComponentFixture<NotexistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotexistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotexistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
