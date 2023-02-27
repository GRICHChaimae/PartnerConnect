import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/admin/auth/auth.module';
import { PAuthController } from './p-auth.controller';
import { PAuthService } from './p-auth.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Parrain, ParrainSchema } from './schemas/parrain.schema';

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
    MongooseModule.forFeature([{ name: Parrain.name, schema: ParrainSchema }]),
  ],
  controllers: [PAuthController],
  providers: [PAuthService],
})
export class PAuthModule {}
