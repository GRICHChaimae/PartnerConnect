import { IsNotEmpty, IsString } from 'class-validator';

export class MentorLoginDto {
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}