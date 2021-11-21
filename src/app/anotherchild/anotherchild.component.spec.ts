import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherchildComponent } from './anotherchild.component';

describe('AnotherchildComponent', () => {
  let component: AnotherchildComponent;
  let fixture: ComponentFixture<AnotherchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
