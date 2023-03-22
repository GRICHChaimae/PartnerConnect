import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { ProtégéSchema } from 'src/schemas/protégé schemas/protégé.schema';
import { MenteeJwtStrategy } from './mentee-jwt.strategy';
import { MenteeLoginController } from './mentee-login.controller';
import { MenteeLoginService } from './mentee-login.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'MenteeJWT' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get<string | number>('JWT_EXPIRE'),
          },
        };
      },
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: 'Protégé', schema: ProtégéSchema }]),
  ],
  controllers: [MenteeLoginController],
  providers: [MenteeLoginService, MenteeJwtStrategy],
  exports: [MenteeJwtStrategy, PassportModule],
})
export class MenteeLoginModule {}