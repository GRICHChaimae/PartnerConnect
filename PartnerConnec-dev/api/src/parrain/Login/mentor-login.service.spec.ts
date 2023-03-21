import { Test, TestingModule } from '@nestjs/testing';
import { MentorLoginService } from './mentor-login.service';

describe('MentorLoginService', () => {
  let service: MentorLoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MentorLoginService],
    }).compile();

    service = module.get<MentorLoginService>(MentorLoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
