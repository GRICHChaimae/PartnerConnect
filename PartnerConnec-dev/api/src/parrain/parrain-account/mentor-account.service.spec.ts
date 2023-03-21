import { Test, TestingModule } from '@nestjs/testing';
import { MentorAccountService } from './mentor-account.service';

describe('MentorAccountService', () => {
  let service: MentorAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MentorAccountService],
    }).compile();

    service = module.get<MentorAccountService>(MentorAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
