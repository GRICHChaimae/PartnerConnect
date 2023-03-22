import { Test, TestingModule } from '@nestjs/testing';
import { MenteeLoginService } from './mentee-login.service';

describe('MenteeLoginService', () => {
  let service: MenteeLoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenteeLoginService],
    }).compile();

    service = module.get<MenteeLoginService>(MenteeLoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
