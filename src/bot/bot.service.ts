import { Injectable } from '@nestjs/common';
import { Action, Ctx, On, Start, Update } from 'nestjs-telegraf';
import { UsersRepository } from 'src/users/users.repository';
import { Context, Markup } from 'telegraf';
import { BotStatus } from './const/status';
import { CallBackData } from './const/callback-datas';
import { Message } from 'telegraf/typings/core/types/typegram';
@Update()
@Injectable()
export class BotService {
  constructor(private readonly usersRepository: UsersRepository) {}

  @Start()
  async start(@Ctx() ctx: Context) {
    const full_name =
      ctx.from.first_name +
      ' ' +
      String(ctx.from.last_name ? ctx.from.last_name : '');
    const hasUser = await this.usersRepository.findBy({
      bot_user_id: String(ctx.from.id),
    });

    if (!hasUser) {
      await this.usersRepository.create({
        bot_user_id: String(ctx.from.id),
        full_name,
        bot_user_status: BotStatus.ASK_NAME,
      });
    } else {
      await this.usersRepository.update(hasUser.id, {
        full_name,
        bot_user_status: BotStatus.ASK_NAME,
      });
    }
    await ctx.reply(
      'Assalomu alaykum foydalanuchi, bu botda siz test ishlashingiz mumkin',
    );
    await ctx.reply('Sizga ' + full_name + ' deb murojaat qilaveraylikmi?', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Ha', callback_data: CallBackData.YES_MY_NAME },
            { text: `Yo'q`, callback_data: CallBackData.NOT_MY_NAME },
          ],
        ],
      },
    });
  }

  @Action(CallBackData.YES_MY_NAME)
  async onYesMyName(@Ctx() ctx: Context) {
    await ctx.answerCbQuery();
    await ctx.editMessageReplyMarkup(null);
    const [res] = await this.usersRepository.updateByBotUserId(
      String(ctx.from.id),
      {
        bot_user_status: BotStatus.SEND_TEST_URL,
      },
    );
    await this.sendWebApp(ctx, res.full_name);
  }

  @Action(CallBackData.NOT_MY_NAME)
  async onNotMyName(@Ctx() ctx: Context) {
    await ctx.answerCbQuery();
    await ctx.editMessageReplyMarkup(null);
    await this.usersRepository.updateByBotUserId(String(ctx.from.id), {
      bot_user_status: BotStatus.ENTER_NAME,
    });
    await ctx.reply(`To'liq ismingizni kiriting:`);
  }

  @On('text')
  async onText(@Ctx() ctx: Context) {
    const full_name = (ctx.message as Message.TextMessage).text;

    const hasUser = await this.usersRepository.findBy({
      bot_user_id: String(ctx.from.id),
    });
    console.log(hasUser);
    if (hasUser.bot_user_status === BotStatus.ENTER_NAME) {
      await this.usersRepository.updateByBotUserId(String(ctx.from.id), {
        bot_user_status: BotStatus.SEND_TEST_URL,
        full_name,
      });
      await this.sendWebApp(ctx, full_name);
    }
  }

  sendWebApp(ctx: Context, full_name: string) {
    return ctx.reply(full_name + ' test ishlash uchun bosing:', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Test ishlash',
              web_app: {
                url: 'https://www.influxdata.com/time-series-platform/telegraf/',
              },
            },
          ],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  }
}
