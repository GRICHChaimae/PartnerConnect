import { Test, TestingModule } from '@nestjs/testing';
import { ListParrainsController } from './list-parrains.controller';

describe('ListParrainsController', () => {
  let controller: ListParrainsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListParrainsController],
    }).compile();

    controller = module.get<ListParrainsController>(ListParrainsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
