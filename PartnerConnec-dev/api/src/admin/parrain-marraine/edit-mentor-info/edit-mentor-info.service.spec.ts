import { Test, TestingModule } from '@nestjs/testing';
import { EditMentorInfoService } from './edit-mentor-info.service';

describe('EditMentorInfoService', () => {
  let service: EditMentorInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditMentorInfoService],
    }).compile();

    service = module.get<EditMentorInfoService>(EditMentorInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
