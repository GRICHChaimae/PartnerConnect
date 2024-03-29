import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Parrain } from 'src/schemas/parrain schemas/parrain.schema';
import { UpdatePasswordDto } from './dto/updatePassword.dto';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class MentorAccountService {
    constructor(
        @InjectModel(Parrain.name)
        private parrainAccount: mongoose.Model<Parrain>
    ) {}

    async updateMentorPassword(mentor: Parrain, updatePasswordDto: UpdatePasswordDto): Promise<string> {
        const { password, newPassword, confirmNewPassword } = updatePasswordDto;

        const parrain = await this.parrainAccount.findById({ _id: mentor._id });

        const isPasswordMatched = await bcrypt.compare(password, parrain.password);

        if (!isPasswordMatched) {
            throw new UnauthorizedException('Old password does not match');
        }

        if (newPassword === confirmNewPassword) {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            await this.parrainAccount.findByIdAndUpdate(mentor._id, { password: hashedPassword });
            return "password updated successfully"
        } else {
            throw new UnauthorizedException('New password does not match');
        }
    }
}
