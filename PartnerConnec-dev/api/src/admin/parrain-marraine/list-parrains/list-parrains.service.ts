import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/schemas/admin schemas/user.schema';
import { Parrain } from 'src/schemas/parrain schemas/parrain.schema';

@Injectable()
export class ListParrainsService {
    constructor(
        @InjectModel(Parrain.name)
        private listParrainModel: mongoose.Model<Parrain>
    ) {}

    async findParrainOfAdmin(user: User): Promise<Parrain[]> {
        const parrainsOfAdmin = await this.listParrainModel.find({ admin : user._id }, { password: 0 });
        return parrainsOfAdmin;
    }
}
