import { Test, TestingModule } from '@nestjs/testing';
import { MenteeAccountService } from './mentee-account.service';

describe('MenteeAccountService', () => {
  let service: MenteeAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenteeAccountService],
    }).compile();

    service = module.get<MenteeAccountService>(MenteeAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
