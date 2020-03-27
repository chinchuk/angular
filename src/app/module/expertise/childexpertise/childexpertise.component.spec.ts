import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildexpertiseComponent } from './childexpertise.component';

describe('ChildexpertiseComponent', () => {
  let component: ChildexpertiseComponent;
  let fixture: ComponentFixture<ChildexpertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildexpertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildexpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
