import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
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
      ],
})
export class ModuleMailerModule {}
