import { 
Body,
Controller,
Post,
UsePipes,
ValidationPipe,
} from '@nestjs/common';
import { MentorLoginDto } from './dto/mentor-login.dto';
import { MentorLoginService } from './mentor-login.service';

@Controller('api/v1/mentor')
export class MentorLoginController {
    constructor(private mentorLoginService: MentorLoginService) {}

    @Post('/login')
    @UsePipes(new ValidationPipe())
    login(@Body() mentorLoginDto: MentorLoginDto): Promise<{ token: string }> {
        return this.mentorLoginService.login(mentorLoginDto);
    }
}
