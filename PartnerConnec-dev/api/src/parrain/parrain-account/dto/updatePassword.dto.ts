import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly newPassword: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly confirmNewPassword: string;
  
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
