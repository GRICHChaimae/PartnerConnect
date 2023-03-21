import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Parrain } from 'src/schemas/parrain schemas/parrain.schema';

@Injectable()
export class MentorJwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(Parrain.name)
    private parrainModel: Model<Parrain>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload) {
    const { id } = payload;

    console.log(id)
    const parrain = await this.parrainModel.findById(id);

    if (!parrain) {
      throw new UnauthorizedException('Login first to access this endpoint.');
    }

    return parrain;
  }
}
