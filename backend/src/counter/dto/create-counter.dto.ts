import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateCounterDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  value: number;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsInt()
  target: number;
}
