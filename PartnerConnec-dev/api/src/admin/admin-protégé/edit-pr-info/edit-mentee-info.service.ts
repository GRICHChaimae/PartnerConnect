import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Protégé } from 'src/schemas/protégé schemas/protégé.schema';
import { EditMenteeInfoDto } from './dto/edit-mentee-info.dto';

@Injectable()
export class EditMenteeInfoService {
    constructor(
        @InjectModel(Protégé.name)
        private menteeModel: Model<Protégé>
    ) {}

    async editMentorInfo(id: string, editMenteeInfoDto: EditMenteeInfoDto): Promise<string> {
        const { name, mentor } = editMenteeInfoDto
        await this.menteeModel.findByIdAndUpdate(id, { name: name, mentor: mentor })
        return "Mentee Info updated sueccessfully"
    }
}
