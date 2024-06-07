import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TestResultsService } from './test-results.service';
import { CreateTestResultDto } from './dto/create-test-result.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Test-results')
@Controller('test-results')
export class TestResultsController {
  constructor(private readonly testResultsService: TestResultsService) {}

  @Post(':bot_user_id')
  create(
    @Param('bot_user_id', ParseIntPipe) bot_user_id: string,
    @Body() createTestResultDto: CreateTestResultDto,
  ) {
    return this.testResultsService.create(bot_user_id, createTestResultDto);
  }

  @Get(':bot_user_id')
  findAll(@Param('bot_user_id', ParseIntPipe) bot_user_id: string) {
    return this.testResultsService.findAll(bot_user_id);
  }

  @Delete(':bot_user_id/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.testResultsService.remove(+id);
  }
}
