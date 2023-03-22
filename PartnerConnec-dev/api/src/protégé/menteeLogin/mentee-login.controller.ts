import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { MenteeLoginDto } from './dto/mentee-login.dto';
import { MenteeLoginService } from './mentee-login.service';

@Controller('api/v1/mentee-login')
export class MenteeLoginController {
    constructor(private menteeLoginService: MenteeLoginService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    login(@Body() menteeLoginDto: MenteeLoginDto): Promise<{ token: string }> {
        return this.menteeLoginService.login(menteeLoginDto);
    }
}
