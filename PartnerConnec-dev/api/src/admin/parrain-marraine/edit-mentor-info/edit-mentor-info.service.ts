import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Parrain } from 'src/schemas/parrain schemas/parrain.schema';
import { EditMentorInfoDto } from './dto/edit-mentor-info.dto';

@Injectable()
export class EditMentorInfoService {
    constructor(
        @InjectModel(Parrain.name)
        private parrainModel: Model<Parrain>
    ) {}

    async editMentorInfo(id: string, editMentorInfoDto: EditMentorInfoDto): Promise<string> {
        const { name } = editMentorInfoDto
        await this.parrainModel.findByIdAndUpdate(id, { name: name})
        console.log(id)
        return "Mentor Info updated sueccessfully"
    }
}
