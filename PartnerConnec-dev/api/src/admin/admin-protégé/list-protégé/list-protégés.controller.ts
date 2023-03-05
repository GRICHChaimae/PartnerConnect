import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Protégé } from '../schemas/protégé.schema';
import { ListProtégésService } from './list-protégés.service';

@Controller('api/v1/list-proteges')
export class ListProtégésController {
    constructor(private listProtégésService: ListProtégésService) {}

    @Get()
    @UseGuards(AuthGuard())
    async findProtégéOfAdmin(@Req() req): Promise<Protégé[]> {
        return this.listProtégésService.findProtégéOfAdmin(req.user);
    }

}
