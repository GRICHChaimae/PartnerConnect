import { Controller, Delete, Param } from '@nestjs/common';
import { Parrain } from '../schemas/parrain.schema';
import { DeleteParrainService } from './delete-parrain.service';

@Controller('api/v1/delete-parrain')
export class DeleteParrainController {
    constructor(private deleteParrainService: DeleteParrainService) {}

    @Delete(':id')
    async deleteParrain(@Param('id') id: string): Promise<Parrain | string> {
        return this.deleteParrainService.deleteParrainById(id)
    }
}
