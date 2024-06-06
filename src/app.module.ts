import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BotModule } from './bot/bot.module';
import { TestResultsModule } from './test_results/test_results.module';
import { TestResultsModule } from './test-results/test-results.module';

@Module({
  imports: [UsersModule, BotModule, TestResultsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
