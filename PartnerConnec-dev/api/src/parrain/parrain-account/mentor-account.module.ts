import { Module } from '@nestjs/common';
import { MentorAccountService } from './mentor-account.service';
import { MentorAccountController } from './mentor-account.controller';
import { MentorLoginModule } from '../Login/mentor-login.module';
import { Parrain, ParrainSchema } from 'src/schemas/parrain schemas/parrain.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MentorLoginModule,
    MongooseModule.forFeature([{ name: Parrain.name, schema: ParrainSchema }]),
  ],
  providers: [MentorAccountService],
  controllers: [MentorAccountController]
})
export class MentorAccountModule {}
