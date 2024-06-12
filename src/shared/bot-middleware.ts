import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express'; // Assuming you're using Express
import { BotStatus } from 'src/bot/const/const';
import { UsersRepository } from 'src/users/users.repository';
@Injectable()
export class BotMiddlewareService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async botSession(ctx, next) {
    if (!ctx.session) {
      const hasUser = await this.usersRepository.findBy({
        bot_user_id: ctx.from.id,
      });
      if (hasUser) {
        ctx.session['status'] = BotStatus.MENU;
      } else {
      }
    }

    await next();
  }
}
