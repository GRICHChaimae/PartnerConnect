import { Test, TestingModule } from '@nestjs/testing';
import { MentorMenteesController } from './mentor-mentees.controller';

describe('MentorMenteesController', () => {
  let controller: MentorMenteesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MentorMenteesController],
    }).compile();

    controller = module.get<MentorMenteesController>(MentorMenteesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
