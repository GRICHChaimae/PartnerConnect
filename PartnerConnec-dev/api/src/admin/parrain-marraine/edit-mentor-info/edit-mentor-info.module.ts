import { Module } from '@nestjs/common';
import { EditMentorInfoService } from './edit-mentor-info.service';
import { EditMentorInfoController } from './edit-mentor-info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/admin/auth/auth.module';
import { ParrainSchema } from 'src/schemas/parrain schemas/parrain.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Parrain', schema: ParrainSchema }])
  ],
  providers: [EditMentorInfoService],
  controllers: [EditMentorInfoController]
})
export class EditMentorInfoModule {}
