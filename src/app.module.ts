import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BotModule } from './bot/bot.module';
import { TestResultsModule } from './test-results/test-results.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KnexModule } from 'nestjs-knex';
import { DatabaseConfig } from './shared/database';
import { Middleware, session } from 'telegraf';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

import { cwd } from 'process';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KnexModule.forRootAsync({
      useClass: DatabaseConfig,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(cwd(), 'assets', 'files'),
    }),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        token: configService.get('BOT_TOKEN'),
        launchOptions: {
          webhook: {
            domain: configService.get('BASE_URL'),
            path: '/bot',
          },
        },
        middlewares: [session()],
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    BotModule,
    TestResultsModule,
  ],
})
export class AppModule {}
