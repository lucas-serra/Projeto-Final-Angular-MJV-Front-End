import { TestBed } from '@angular/core/testing';

import { FuncionarioExisteService } from './funcionario-existe.service';

describe('FuncionarioExisteService', () => {
  let service: FuncionarioExisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionarioExisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
