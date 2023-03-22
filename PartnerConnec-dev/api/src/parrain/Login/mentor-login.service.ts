import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Parrain } from 'src/schemas/parrain schemas/parrain.schema';
import { MentorLoginDto } from './dto/mentor-login.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class MentorLoginService {
    constructor(
        @InjectModel(Parrain.name)
        private parrainModel: Model<Parrain>,
        private jwtService: JwtService,
    ) {}

    async login(mentorLoginDto: MentorLoginDto): Promise<{ token: string }> {
        const { email, password } = mentorLoginDto;
    
        const mentor = await this.parrainModel.findOne({ email });
    
        if (!mentor) {
          throw new UnauthorizedException('Invalid email or password');
        }
    
        const isPasswordMatched = await bcrypt.compare(password, mentor.password);
    
        if (!isPasswordMatched) {
          throw new UnauthorizedException('Invalid email or password');
        }
    
        const token = this.jwtService.sign({ id: mentor._id });
        return { token };
    }
}
