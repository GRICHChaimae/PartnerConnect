import { Module } from '@nestjs/common';
import { GetActivitiesService } from './get-activities.service';
import { GetActivitiesController } from './get-activities.controller';
import { MentorLoginModule } from '../Login/mentor-login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivitySchema } from 'src/schemas/activities-calnder schemas/activities-calnder.schemas';

@Module({
  imports: [
    MentorLoginModule,
    MongooseModule.forFeature([{ name: 'Activity', schema: ActivitySchema}])
  ],
  providers: [GetActivitiesService],
  controllers: [GetActivitiesController]
})
export class GetActivitiesModule {}
