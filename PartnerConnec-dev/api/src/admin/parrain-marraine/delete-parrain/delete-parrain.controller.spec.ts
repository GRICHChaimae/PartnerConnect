import { Test, TestingModule } from '@nestjs/testing';
import { DeleteParrainController } from './delete-parrain.controller';

describe('DeleteParrainController', () => {
  let controller: DeleteParrainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteParrainController],
    }).compile();

    controller = module.get<DeleteParrainController>(DeleteParrainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
