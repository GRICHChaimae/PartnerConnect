import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class EditMentorInfoDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
