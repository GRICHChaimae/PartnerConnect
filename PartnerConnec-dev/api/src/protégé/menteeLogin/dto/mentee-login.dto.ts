import { IsNotEmpty, IsString } from 'class-validator';

export class MenteeLoginDto {
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}