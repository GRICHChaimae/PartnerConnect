import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/schemas/admin schemas/user.schema';
import { Protégé } from 'src/schemas/protégé schemas/protégé.schema';

@Injectable()
export class ListProtégésService {
    constructor(
        @InjectModel(Protégé.name)
        private listProtégéModel: mongoose.Model<Protégé>
    ) {}

    async findProtégéOfAdmin(user: User): Promise<Protégé[]> {
        const protégésOfAdmin = await this.listProtégéModel.find({ admin : user._id }, { password: 0 }).populate('mentor', '-password');
        return protégésOfAdmin;
    }
}
