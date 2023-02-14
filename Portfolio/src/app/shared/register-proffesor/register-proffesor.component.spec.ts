import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProffesorComponent } from './register-proffesor.component';

describe('RegisterProffesorComponent', () => {
  let component: RegisterProffesorComponent;
  let fixture: ComponentFixture<RegisterProffesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterProffesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProffesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
