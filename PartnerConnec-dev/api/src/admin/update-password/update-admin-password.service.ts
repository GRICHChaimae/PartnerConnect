import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/schemas/admin schemas/user.schema';
import { UpdateAdminPassdDto } from './dto/updateAdminPass.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UpdateAdminPasswordService {
    constructor(
        @InjectModel(User.name)
        private adminAccount: mongoose.Model<User>
    ){}

    async updateAdminPassword(admin: User, updateAdminPassdDto: UpdateAdminPassdDto): Promise<string> {
        const { password, newPassword, confirmNewPassword } = updateAdminPassdDto;

        const parrain = await this.adminAccount.findById({ _id: admin._id });

        const isPasswordMatched = await bcrypt.compare(password, parrain.password);

        if (!isPasswordMatched) {
            throw new UnauthorizedException('Old password does not match');
        }

        if (newPassword === confirmNewPassword) {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            await this.adminAccount.findByIdAndUpdate(admin._id, { password: hashedPassword });
            return "password updated successfully"
        } else {
            throw new UnauthorizedException('New password does not match');
        }
    }
}
