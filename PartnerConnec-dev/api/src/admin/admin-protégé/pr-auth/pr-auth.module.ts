import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/admin/auth/auth.module';
import { Protégé, ProtégéSchema } from '../schemas/protégé.schema';
import { PrAuthController } from './pr-auth.controller';
import { PrAuthService } from './pr-auth.service';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get('SMTP_HOST'),
          port: configService.get('SMTP_PORT'),
          auth: {
            user: configService.get('SMTP_USER'),
            pass: configService.get('SMTP_PASSWORD'),
          },
        },
        defaults: {
          from: configService.get('SMTP_FROM'),
        },
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Protégé.name, schema: ProtégéSchema }]),
  ],
  controllers: [PrAuthController],
  providers: [PrAuthService],
})
export class PrAuthModule {}
