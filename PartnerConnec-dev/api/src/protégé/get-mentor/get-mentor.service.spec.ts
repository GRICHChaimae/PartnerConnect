import { Test, TestingModule } from '@nestjs/testing';
import { GetMentorService } from './get-mentor.service';

describe('GetMentorService', () => {
  let service: GetMentorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetMentorService],
    }).compile();

    service = module.get<GetMentorService>(GetMentorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
