import { TestBed } from '@angular/core/testing';

import { NovoFuncionarioService } from './novo-funcionario.service';

describe('NovoFuncionarioService', () => {
  let service: NovoFuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoFuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
