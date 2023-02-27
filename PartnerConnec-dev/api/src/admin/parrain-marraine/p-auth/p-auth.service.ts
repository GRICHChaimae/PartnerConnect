import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Parrain } from './schemas/parrain.schema';
import { ParrainSignUpDto } from './dto/parrainsignup.dto';
import { User } from 'src/admin/auth/schemas/user.schema';
import { MailerService } from '@nestjs-modules/mailer';

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
    await this.sendEmail(email, name);
    return 'parrain account created succefuly';
  }

  async sendEmail(email: string, name: string) {
    try {
      await this.mailerService.sendMail({
        to: email,
        subject: 'Test Successful',
        html: ` 
          <h1>Hello ${name}</h1>
          <p>text description: execute two function sending one req modified</p>
          <a href="https://www.youtube.com/watch?v=i6q3yO0Mb88">update your password to be able to use ur account</a>
        `,
      });
      return 'Email sent successfully';
    } catch (error) {
      return `Error sending email: ${error.message}`;
    }
  }
}
