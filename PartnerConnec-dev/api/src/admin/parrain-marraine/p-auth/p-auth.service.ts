import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { ParrainSignUpDto } from './dto/parrainsignup.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { Parrain } from 'src/schemas/parrain schemas/parrain.schema';
import { User } from 'src/schemas/admin schemas/user.schema';

@Injectable()
export class PAuthService {
  constructor(
    @InjectModel(Parrain.name)
    private parrainModel: Model<Parrain>,
    private readonly mailerService: MailerService,
  ) {}

  // async parrainSingUp(parrainSignUpDto: ParrainSignUpDto, user: User): Promise<string> {
  //   const { name, email, password } = parrainSignUpDto;

  //   const existUser = await this.parrainModel.findOne({ email });

  //   if (existUser) {
  //     throw new UnauthorizedException(
  //       'There is already a user with this email',
  //     );
  //   }

  //   const hashedPassword = await bcrypt.hash(password, 10);

  //   const parrain = await this.parrainModel.create({
  //     name,
  //     email,
  //     password: hashedPassword,
  //     admin: user._id,
  //   });
  //   await this.sendEmail(email, name, password);
  //   return 'parrain account created';
  // }

  async parrainSingUp(parrainSignUpDto: ParrainSignUpDto, user: User): Promise<string> {
    const { name, email, password } = parrainSignUpDto;
  
    const existUser = await this.parrainModel.findOne({ email });
  
    if (existUser) {
      throw new UnauthorizedException(
        'There is already a user with this email',
      );
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const [parrain] = await Promise.all([
      this.parrainModel.create({
        name,
        email,
        password: hashedPassword,
        admin: user._id,
      }),
      this.sendEmail(email, name, password),
    ]);
  
    return 'Mentor account created successfully';
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

  // async sendEmail(email: string, name: string, password: string) {
  //   const sent = await this.mailerService.sendMail({
  //     to: email,
  //     subject: 'Test Successful',
  //     html: ` 
  //       <h5>Hello ${name}</h5>
  //       <p>this is your password to join in your account as a godfather</p>
  //       <p> <span style="color:red; font-weight: bold;">N.B.</span> please update your password</p>
  //       <p>password: ${password}</p>
  //     `,
  //   });
  //   if (sent) {
  //     return 'Email sent successfully';
  //   } else {
  //     throw new Error(`Error sending email to ${email}`);
  //   }
  // }
  
}
