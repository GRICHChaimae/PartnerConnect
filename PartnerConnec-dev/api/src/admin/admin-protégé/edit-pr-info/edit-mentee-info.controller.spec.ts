import { Test, TestingModule } from '@nestjs/testing';
import { EditMenteeInfoController } from './edit-mentee-info.controller';

describe('EditMenteeInfoController', () => {
  let controller: EditMenteeInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditMenteeInfoController],
    }).compile();

    controller = module.get<EditMenteeInfoController>(EditMenteeInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
