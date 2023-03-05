import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Parrain } from '../schemas/parrain.schema';
import { ListParrainsService } from './list-parrains.service';

@Controller('api/v1/list-parrains')
export class ListParrainsController {
    constructor(private listParrainsService: ListParrainsService) {}

    @Get()
    @UseGuards(AuthGuard())
    async findParrainOfAdmin(@Req() req): Promise<Parrain[]> {
        return this.listParrainsService.findParrainOfAdmin(req.user);
    }
}
