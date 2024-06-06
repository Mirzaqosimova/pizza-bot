import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BotModule } from './bot/bot.module';
import { TestResultsModule } from './test-results/test-results.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        token: configService.get('BOT_TOKEN'),
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    BotModule,
    TestResultsModule,
  ],
})
export class AppModule {}
