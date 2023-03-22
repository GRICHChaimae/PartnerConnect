import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { MenteeLoginModule } from '../menteeLogin/mentee-login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivitySchema } from 'src/schemas/activities-calnder schemas/activities-calnder.schemas';

@Module({
  imports: [
    MenteeLoginModule,
    MongooseModule.forFeature([{ name: 'Activity', schema: ActivitySchema }])
  ],
  providers: [ActivitiesService],
  controllers: [ActivitiesController]
})
export class ActivitiesModule {}
