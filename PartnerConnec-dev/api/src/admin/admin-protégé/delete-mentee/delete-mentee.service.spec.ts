import { Test, TestingModule } from '@nestjs/testing';
import { DeleteMenteeService } from './delete-mentee.service';

describe('DeleteMenteeService', () => {
  let service: DeleteMenteeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteMenteeService],
    }).compile();

    service = module.get<DeleteMenteeService>(DeleteMenteeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
