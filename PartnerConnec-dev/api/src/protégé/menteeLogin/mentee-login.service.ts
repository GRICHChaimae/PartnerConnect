import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Protégé } from 'src/schemas/protégé schemas/protégé.schema';
import { MenteeLoginDto } from './dto/mentee-login.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class MenteeLoginService {
    constructor(
        @InjectModel(Protégé.name)
        private protégéModel: Model<Protégé>,
        private jwtService: JwtService,
    ) {}

    async login(menteeLoginDto: MenteeLoginDto): Promise<{ token: string }> {
        const { email, password } = menteeLoginDto;
    
        const mentee = await this.protégéModel.findOne({ email });
    
        if (!mentee) {
          throw new UnauthorizedException('Invalid email or password');
        }
    
        const isPasswordMatched = await bcrypt.compare(password, mentee.password);
    
        if (!isPasswordMatched) {
          throw new UnauthorizedException('Invalid email or password');
        }
    
        const token = this.jwtService.sign({ id: mentee._id });
        return { token };
    }
}
