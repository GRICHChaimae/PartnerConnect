import { Test, TestingModule } from '@nestjs/testing';
import { DeleteParrainService } from './delete-parrain.service';

describe('DeleteParrainService', () => {
  let service: DeleteParrainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteParrainService],
    }).compile();

    service = module.get<DeleteParrainService>(DeleteParrainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
