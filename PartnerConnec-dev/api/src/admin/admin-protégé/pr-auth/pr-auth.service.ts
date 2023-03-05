import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MailerService } from '@nestjs-modules/mailer';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { ProtégéSignUpDto } from './dto/protégésignup.dto';
import { User } from 'src/admin/auth/schemas/user.schema';
import { Protégé } from '../schemas/protégé.schema';


@Injectable()
export class PrAuthService {
    constructor(
        @InjectModel(Protégé.name)
        private parrainModel: Model<Protégé>,
        private readonly mailerService: MailerService,
    ) {}

    async parrainSingUp(
        protégéSignUpDto: ProtégéSignUpDto,
        user: User,
      ): Promise<string> {
        const { name, email, password, mentor } = protégéSignUpDto;
    
        const existUser = await this.parrainModel.findOne({ email });
    
        if (existUser) {
          throw new UnauthorizedException(
            'There is already a user with this email',
          );
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const protégé = await this.parrainModel.create({
          name,
          email,
          password: hashedPassword,
          admin: user._id,
          mentor,
        });
        await this.sendEmail(email, name, password);
        return 'protected account created succefuly';
      }

    async sendEmail(email: string, name: string, password: string) {
      try {
        await this.mailerService.sendMail({
          to: email,
          subject: 'Test Successful',
          html: ` 
            <h5>Hello ${name}</h5>
            <p>this is your password to join in your account as a protected</p>
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
