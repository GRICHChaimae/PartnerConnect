import { Test, TestingModule } from '@nestjs/testing';
import { MentorMenteesService } from './mentor-mentees.service';

describe('MentorMenteesService', () => {
  let service: MentorMenteesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MentorMenteesService],
    }).compile();

    service = module.get<MentorMenteesService>(MentorMenteesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
