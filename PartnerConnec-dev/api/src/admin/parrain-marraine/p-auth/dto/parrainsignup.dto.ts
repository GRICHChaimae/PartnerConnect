import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { User } from 'src/admin/auth/schemas/user.schema';

export class ParrainSignUpDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  @IsEmpty({ message: 'You can not pass user id' })
  admin: User;
}
