import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';

export class CreateTestResultDto {
  @ApiProperty()
  @IsNumber()
  family: number;
  @ApiProperty()
  @IsNumber()
  value: number;
  @ApiProperty()
  @IsNumber()
  hobby_and_interests: number;
  @ApiProperty()
  @IsNumber()
  career: number;
  @ApiProperty()
  @IsNumber()
  financial_stability: number;
  @ApiProperty()
  @IsNumber()
  personal_growth: number;
  @ApiProperty()
  @IsNumber()
  sport_health: number;
  @ApiProperty()
  @IsNumber()
  friends_around: number;
}
