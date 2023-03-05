import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { ParrainSignUpDto } from './dto/parrainsignup.dto';
import { User } from 'src/admin/auth/schemas/user.schema';
import { MailerService } from '@nestjs-modules/mailer';
import { Parrain } from '../schemas/parrain.schema';

@Injectable()
export class PAuthService {
  constructor(
    @InjectModel(Parrain.name)
    private parrainModel: Model<Parrain>,
    private readonly mailerService: MailerService,
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
    await this.sendEmail(email, name, password);
    return 'parrain account created succefuly';
  }

  async sendEmail(email: string, name: string, password: string) {
    try {
      await this.mailerService.sendMail({
        to: email,
        subject: 'Test Successful',
        html: ` 
          <h5>Hello ${name}</h5>
          <p>this is your password to join in your account as a godfather</p>
          <p> <span style="color:red; font-weight: bold;">N.B.</span> please update your password</p>
          <p>password: ${password}</p>
        `,
      });
      return 'Email sent successfully';
    } catch (error) {
      return `Error sending email: ${error.message}`;
    }
  }
}
