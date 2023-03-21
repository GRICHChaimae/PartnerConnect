import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { ParrainSchema } from 'src/schemas/parrain schemas/parrain.schema';
import { MentorJwtStrategy } from './mentor-jwt.strategy';
import { MentorLoginService } from './mentor-login.service';
import { MentorLoginController } from './mentor-login.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
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
    MongooseModule.forFeature([{ name: 'Parrain', schema: ParrainSchema }]),
  ],
  controllers: [MentorLoginController],
  providers: [MentorLoginService, MentorJwtStrategy],
  exports: [MentorJwtStrategy, PassportModule],
})
export class MentorLoginModule {}
