import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosCadastrosComponent } from './resultados-cadastros.component';

describe('ResultadosCadastrosComponent', () => {
  let component: ResultadosCadastrosComponent;
  let fixture: ComponentFixture<ResultadosCadastrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosCadastrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosCadastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
