import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { UsersModule } from 'src/users/users.module';
import { TestResultsModule } from 'src/test-results/test-results.module';

@Module({
  imports: [UsersModule, TestResultsModule],
  providers: [BotService],
})
export class BotModule {}
