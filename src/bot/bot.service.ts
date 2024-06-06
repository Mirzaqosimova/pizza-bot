import { Injectable } from '@nestjs/common';
import { Ctx, Start, Update } from 'nestjs-telegraf';
import { Context, Markup } from 'telegraf';
@Update()
@Injectable()
export class BotService {
  @Start()
  async start(@Ctx() ctx: Context) {
    await ctx.reply('Test ishlash uchun knopka bosing:', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Test ishlash',
              url: 'https://www.influxdata.com/time-series-platform/telegraf/',
            },
          ],
        ],

        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  }
}
