import { Module } from '@nestjs/common';
import { TestResultsService } from './test-results.service';
import { TestResultsController } from './test-results.controller';
import { TestResultsRepository } from './test-results.repository';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [TestResultsController],
  providers: [TestResultsService, TestResultsRepository],
  exports: [TestResultsRepository],
})
export class TestResultsModule {}
