import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class EditMenteeInfoDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    mentor: string;
}