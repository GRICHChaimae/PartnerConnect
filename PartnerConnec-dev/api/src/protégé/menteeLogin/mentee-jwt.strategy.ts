import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Protégé } from 'src/schemas/protégé schemas/protégé.schema';


@Injectable()
export class MenteeJwtStrategy extends PassportStrategy(Strategy, 'MenteeJWT') {
  constructor(
    @InjectModel(Protégé.name)
    private protégéModel: Model<Protégé>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_Mentee,
    });
  }

  async validate(payload) {
    const { id } = payload;

    const mentee = await this.protégéModel.findById(id);

    if (!mentee) {
      throw new UnauthorizedException('Login first to access this endpoint.');
    }

    return mentee
  }
}
