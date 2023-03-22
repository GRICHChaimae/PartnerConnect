import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivitySchema } from 'src/schemas/activities-calnder schemas/activities-calnder.schemas';
import { MentorLoginModule } from '../Login/mentor-login.module';
import { ActivityCalnderController } from './activity-calnder.controller';
import { ActivityCalnderService } from './activity-calnder.service';

@Module({
  imports: [
    MentorLoginModule,
    MongooseModule.forFeature([{ name: 'Activity', schema: ActivitySchema}])
  ],
  controllers: [ActivityCalnderController],
  providers: [ActivityCalnderService]
})
export class ActivityCalnderModule {}
