import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MailerService } from '@nestjs-modules/mailer';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { ProtégéSignUpDto } from './dto/protégésignup.dto';
import { Protégé } from 'src/schemas/protégé schemas/protégé.schema';
import { User } from 'src/schemas/admin schemas/user.schema';
import { Parrain } from 'src/schemas/parrain schemas/parrain.schema';


@Injectable()
export class PrAuthService {
    constructor(
        @InjectModel(Protégé.name)
        private protégéModel: Model<Protégé>,
        private readonly mailerService: MailerService,
        @InjectModel(Parrain.name)
        private parrainMode: Model<Parrain>
    ) {}

    async parrainSignUp(
      protégéSignUpDto: ProtégéSignUpDto,
      user: User,
    ): Promise<string> {
      const { name, email, password, mentor } = protégéSignUpDto;
    
      // Check if the user already exists
      const existUser = await this.protégéModel.findOne({ email }, { email: 1 });
    
      if (existUser) {
        throw new UnauthorizedException(
          'There is already a mentee with this email',
        );
      }
    
      // Check if a mentor already exists with this email
      const existAsParrain = await this.parrainMode.findOne({ email }, { email: 1 });
    
      if (existAsParrain) {
        throw new UnauthorizedException(
          'There is already a mentor with this email',
        );
      }
    
      // Check if there are any mentors
      const count = await this.parrainMode.countDocuments();
      if (count === 0) {
        throw new UnauthorizedException(
          'You cannot create a mentee without at least one mentor',
        );
      }
    
      // Hash the password and create the user
      const hashedPassword = await bcrypt.hash(password, 10);
      const protégé = await this.protégéModel.create({
        name,
        email,
        password: hashedPassword,
        admin: user._id,
        mentor,
      });
    
      // Send the welcome email
      await this.sendEmail(email, name, password);
    
      return 'protected account created successfully';
    }

    async sendEmail(email: string, name: string, password: string) {
      try {
        await this.mailerService.sendMail({
          to: email,
          subject: 'Test Successful',
          html: ` 
            <h5>Hello ${name}</h5>
            <p>this is your password to join in your account as a mentee</p>
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
