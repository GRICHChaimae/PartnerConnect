import { Test, TestingModule } from '@nestjs/testing';
import { EditMenteeInfoService } from './edit-mentee-info.service';

describe('EditMenteeInfoService', () => {
  let service: EditMenteeInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditMenteeInfoService],
    }).compile();

    service = module.get<EditMenteeInfoService>(EditMenteeInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
