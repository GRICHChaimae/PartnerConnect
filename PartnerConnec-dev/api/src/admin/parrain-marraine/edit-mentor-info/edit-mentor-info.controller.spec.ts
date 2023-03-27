import { Test, TestingModule } from '@nestjs/testing';
import { EditMentorInfoController } from './edit-mentor-info.controller';

describe('EditMentorInfoController', () => {
  let controller: EditMentorInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditMentorInfoController],
    }).compile();

    controller = module.get<EditMentorInfoController>(EditMentorInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
