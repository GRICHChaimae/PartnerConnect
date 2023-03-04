import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PrAuthModule } from './admin/admin-protégé/pr-auth/pr-auth.module';
import { AuthModule } from './admin/auth/auth.module';
import { PAuthModule } from './admin/parrain-marraine/p-auth/p-auth.module';
import { ListParrainsModule } from './admin/parrain-marraine/list-parrains/list-parrains.module';

@Module({
  imports: [
    AuthModule,
    PAuthModule,
    PrAuthModule,
    ListParrainsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://127.0.0.1/PartnerConnect'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
