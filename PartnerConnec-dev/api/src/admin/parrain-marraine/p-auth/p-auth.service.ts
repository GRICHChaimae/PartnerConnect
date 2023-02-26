import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Parrain } from './schemas/parrain.schema';
import { ParrainSignUpDto } from './dto/parrainsignup.dto';
import { User } from 'src/admin/auth/schemas/user.schema';

@Injectable()
export class PAuthService {
  constructor(
    @InjectModel(Parrain.name)
    private parrainModel: Model<Parrain>,
  ) {}

  async parrainSingUp(
    parrainSignUpDto: ParrainSignUpDto,
    user: User,
  ): Promise<string> {
    const { name, email, password } = parrainSignUpDto;

    const existUser = await this.parrainModel.findOne({ email });

    if (existUser) {
      throw new UnauthorizedException(
        'There is already a user with this email',
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const parrain = await this.parrainModel.create({
      name,
      email,
      password: hashedPassword,
      admin: user._id,
    });
    return 'parrain account created succefuly';
  }
}
