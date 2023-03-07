import { Test, TestingModule } from '@nestjs/testing';
import { DeleteMenteeController } from './delete-mentee.controller';

describe('DeleteMenteeController', () => {
  let controller: DeleteMenteeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteMenteeController],
    }).compile();

    controller = module.get<DeleteMenteeController>(DeleteMenteeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
