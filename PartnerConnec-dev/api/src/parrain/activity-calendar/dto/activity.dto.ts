import {
    IsDateString,
    IsEmpty,
    IsNotEmpty,
    IsString,
  } from 'class-validator';
import { Parrain } from 'src/schemas/parrain schemas/parrain.schema';
  
  export class ActivityDto {
    @IsNotEmpty()
    @IsString()
    title: string;
  
    @IsNotEmpty()
    @IsString()
    place: string;
  
    @IsNotEmpty()
    @IsDateString()
    date: Date;

    @IsNotEmpty()
    @IsString()
    description: string;
  
    @IsEmpty({ message: 'You can not pass mentor id' })
    mentor: Parrain;
  }
  