import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Req, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { ParrainSignUpDto } from './dto/parrainsignup.dto';
import { PAuthService } from './p-auth.service';

@Controller('api/v1/p-auth')
export class PAuthController {
  constructor(private pAuthService: PAuthService) {}

  @Post('/signup')
  @UseGuards(AuthGuard())
  @UsePipes(new ValidationPipe())
  parrainSignUp(
    @Body()
    parrainSignUpDto: ParrainSignUpDto,
    @Req() req,
  ) {
    return this.pAuthService.parrainSingUp(parrainSignUpDto, req.user);
  }
}
