import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Protégé } from 'src/schemas/protégé schemas/protégé.schema';

@Injectable()
export class DeleteMenteeService {
    constructor(
        @InjectModel(Protégé.name)
        private protégéModel: Model<Protégé>,
    ) {}
    
    async deleteMenteeById(id: string): Promise<string> {
        const result = await this.protégéModel.deleteOne({ _id: id });
        console.log(result.deletedCount)
        if (result.deletedCount == 0) {
          throw new NotFoundException(`Mentee with ID ${id} not found.`);
        } else {
            return "The mentee account is deleted successfully";
        }
      }
}
