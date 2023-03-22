import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Protégé } from 'src/schemas/protégé schemas/protégé.schema';
import { UpdateMenteePasswordDto } from './dto/updateMenteePassword.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class MenteeAccountService {
    constructor(
        @InjectModel(Protégé.name)
        private menteeAccount: mongoose.Model<Protégé>
    ) {}

    async updateMentorPassword(id: string, updateMenteePasswordDto: UpdateMenteePasswordDto): Promise<string> {
        const { password, newPassword, confirmNewPassword } = updateMenteePasswordDto;

        const mentee = await this.menteeAccount.findOne({ _id: id });

        const isPasswordMatched = await bcrypt.compare(password, mentee.password);

        if (!isPasswordMatched) {
            throw new UnauthorizedException('Old password does not match');
        }

        if (newPassword === confirmNewPassword) {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            await this.menteeAccount.findByIdAndUpdate(id, { password: hashedPassword });
            return "password updated successfully"
        } else {
            throw new UnauthorizedException('New password does not match');
        }
    }
}
