import { Test, TestingModule } from '@nestjs/testing';
import { PAuthService } from './p-auth.service';

describe('PAuthService', () => {
  let service: PAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PAuthService],
    }).compile();

    service = module.get<PAuthService>(PAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
