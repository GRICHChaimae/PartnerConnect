import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PrAuthModule } from './admin/admin-protégé/pr-auth/pr-auth.module';
import { AuthModule } from './admin/auth/auth.module';
import { PAuthModule } from './admin/parrain-marraine/p-auth/p-auth.module';
import { ListParrainsModule } from './admin/parrain-marraine/list-parrains/list-parrains.module';
import { ListProtégésModule } from './admin/admin-protégé/list-protégé/list-protégés.module';
import { DeleteParrainModule } from './admin/parrain-marraine/delete-parrain/delete-parrain.module';
import { ModuleMailerModule } from './modules/module-mailer.module';
import { DeleteMenteeModule } from './admin/admin-protégé/delete-mentee/delete-mentee.module';
import { MentorLoginModule } from './parrain/Login/mentor-login.module';
import { MentorAccountModule } from './parrain/parrain-account/mentor-account.module';
import { MentorMenteesModule } from './parrain/parrain-mentees/mentor-mentees.module';
import { ActivityCalnderModule } from './parrain/activity-calendar/activity-calnder.module';
import { GetActivitiesModule } from './parrain/getActivites/get-activities.module';
import { MenteeLoginModule } from './protégé/menteeLogin/mentee-login.module';
import { ActivitiesModule } from './protégé/get-activities/activities.module';
import { MenteeAccountModule } from './protégé/mentee-account/mentee-account.module';
import { GetMentorModule } from './protégé/get-mentor/get-mentor.module';

@Module({
  imports: [
    AuthModule,
    PAuthModule,
    PrAuthModule,
    ListParrainsModule,
    ListProtégésModule,
    DeleteParrainModule,
    DeleteMenteeModule,
    ModuleMailerModule,
    MentorLoginModule,
    MentorAccountModule,
    MentorMenteesModule,
    ActivityCalnderModule,
    GetActivitiesModule,
    MenteeLoginModule,
    ActivitiesModule,
    MenteeAccountModule,
    GetMentorModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://127.0.0.1/PartnerConnect'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
