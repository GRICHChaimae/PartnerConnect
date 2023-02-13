import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './admin/auth/auth.module';
import { PAuthModule } from './admin/parrain-marraine/p-auth/p-auth.module';

@Module({
  imports: [
    AuthModule,
    PAuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/PartnerConnect'),
    PAuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
