import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DeleteMenteeService } from './delete-mentee.service';

@Controller('api/v1/delete-mentee')
export class DeleteMenteeController {
    constructor(private deleteMenteeService: DeleteMenteeService) {}

    @Delete(':id')
    @UseGuards(AuthGuard())
    async deleteMentee(@Param('id') id: string): Promise <string> {
        return this.deleteMenteeService.deleteMenteeById(id)
    }
}
