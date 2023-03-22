import { Module } from '@nestjs/common';
import { GetMentorService } from './get-mentor.service';
import { GetMentorController } from './get-mentor.controller';
import { MenteeLoginModule } from '../menteeLogin/mentee-login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Parrain } from 'src/schemas/parrain schemas/parrain.schema';

@Module({
  imports: [
    MenteeLoginModule,
    MongooseModule.forFeature([{ name: 'Parrain', schema: Parrain}])
  ],
  providers: [GetMentorService],
  controllers: [GetMentorController]
})
export class GetMentorModule {}
