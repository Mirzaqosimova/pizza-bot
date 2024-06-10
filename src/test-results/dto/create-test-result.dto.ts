import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString, Max, Min, ValidateNested } from 'class-validator';

export class CreateTestResultDto {
  @ApiProperty()
  @IsNumber()
  @Min(0.1)
  @Max(10)
  family: number;

  @ApiProperty()
  @IsNumber()
  @Min(0.1)
  @Max(10)
  value: number;

  @ApiProperty()
  @IsNumber()
  @Min(0.1)
  @Max(10)
  hobby_and_interests: number;

  @ApiProperty()
  @IsNumber()
  @Min(0.1)
  @Max(10)
  career: number;

  @ApiProperty()
  @IsNumber()
  @Min(0.1)
  @Max(10)
  financial_stability: number;

  @ApiProperty()
  @IsNumber()
  @Min(0.1)
  @Max(10)
  personal_growth: number;

  @ApiProperty()
  @IsNumber()
  @Min(0.1)
  @Max(10)
  sport_health: number;

  @ApiProperty()
  @IsNumber()
  @Min(0.1)
  @Max(10)
  friends_around: number;
}
