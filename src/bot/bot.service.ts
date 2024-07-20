import { Injectable } from '@nestjs/common';
import { Ctx, On, Start, Update } from 'nestjs-telegraf';
import { UsersRepository } from 'src/users/users.repository';
import { MyContext } from './const/my-context';
import { BotStatus, CallBackData, Message } from './const/status';

@Update()
@Injectable()
export class BotService {
  constructor(private readonly usersRepository: UsersRepository) {}

  @Start()
  async start(@Ctx() ctx: MyContext) {
    await this.checkSession(ctx);
  }

  async checkSession(ctx: MyContext) {
    ctx.i18n.languageCode = 'uz';
    const hasUser = await this.usersRepository.findBy({
      bot_user_id: String(ctx.from.id),
    });

    if (hasUser) {
      ctx.session.status = BotStatus.MENU;
      ctx.session.user_id = hasUser.id;
      ctx.i18n.languageCode = 'uz';
      // await this.usersRepository.updateByBotUserId(ctx.from.id, {
      //   bot_user_status: BotStatus.MENU,
      // });
      // await ctx.reply(Message.CHOOSE_MENU, this.getButtons(BotStatus.MENU));
      return true;
    } else {
      await this.chooseLanguage(ctx);
      return false;
    }
  }

  async chooseLanguage(ctx: MyContext) {
    ctx.session.status = BotStatus.CHOOSE_LANGUAGE;
    await ctx.reply(ctx.i18n.t(Message.CHOOSE_LANGUAGE), {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Uzbek', callback_data: CallBackData.UZBEK },
            { text: 'Russian', callback_data: CallBackData.RUSSIAN },
          ],
        ],
      },
    });
  }
}
