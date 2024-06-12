import {
  BotStatus,
  BotStatusType,
  KeyboardText,
  MessageText,
} from 'src/bot/const/const';
import { Injectable } from '@nestjs/common';
import { Action, Ctx, On, Phone, Start, Update } from 'nestjs-telegraf';
import { UsersRepository } from 'src/users/users.repository';
import { Context, Markup } from 'telegraf';
import { CallBackData } from './const/callback-datas';
import { Message } from 'telegraf/typings/core/types/typegram';
import { MyContext } from './const/my-context';
import { MESSAGES } from '@nestjs/core/constants';
@Update()
@Injectable()
export class BotService {
  constructor(private readonly usersRepository: UsersRepository) {}

  @Start()
  async start(@Ctx() ctx: MyContext) {
    const hasUser = await this.usersRepository.findBy({
      bot_user_id: String(ctx.from.id),
    });

    if (hasUser) {
      ctx.session.status = BotStatus.MENU;
      await this.usersRepository.updateByBotUserId(ctx.from.id, {
        bot_user_status: BotStatus.MENU,
      });
      await ctx.reply(MessageText.CHOOSE_MENU, this.getButtons(BotStatus.MENU));
    } else {
      await this.askName(ctx);
    }
  }
  async askName(ctx: MyContext) {
    const full_name =
      ctx.from.first_name +
      ' ' +
      String(ctx.from.last_name ? ctx.from.last_name : '');
    ctx.session.status = BotStatus.ENTER_NAME;
    ctx.session.full_name = full_name;
    await ctx.reply(MessageText.MEETING);
    await ctx.reply('Sizga ' + full_name + ' deb murojaat qilaveraylikmi?', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: KeyboardText.YES, callback_data: CallBackData.YES_MY_NAME },
            { text: KeyboardText.NO, callback_data: CallBackData.NOT_MY_NAME },
          ],
        ],
      },
    });
  }

  @Action(CallBackData.YES_MY_NAME)
  async onYesMyName(@Ctx() ctx: MyContext) {
    await ctx.answerCbQuery();
    await ctx.editMessageReplyMarkup(null);
    ctx.session.status = BotStatus.ENTER__CONTACT;
    await ctx.reply(
      MessageText.SEND_CONTACT,
      this.getButtons(BotStatus.ENTER__CONTACT),
    );
  }

  @Action(CallBackData.NOT_MY_NAME)
  async onNotMyName(@Ctx() ctx: MyContext) {
    await ctx.answerCbQuery();
    await ctx.editMessageReplyMarkup(null);
    ctx.session.status = BotStatus.ENTER_NAME;
    await ctx.reply(MessageText.SEND_NAME);
  }
  @On('contact')
  async contact(@Ctx() ctx: MyContext) {
    const message = ctx.message as Message.ContactMessage;
    ctx.session.phone = message.contact.phone_number;
    ctx.session.status = BotStatus.ENTER_BIRTH_DATE;
    await ctx.reply(MessageText.SEND_BIRTH_DATE),
      {
        reply_markup: {
          remove_keyboard: true,
        },
      };
  }

  @On('text')
  async onText(@Ctx() ctx: MyContext) {
    if (!ctx.session.full_name) {
      return this.askName(ctx);
    }
    switch (ctx.session.status) {
      case BotStatus.ENTER_NAME: {
        const full_name = (ctx.message as Message.TextMessage).text;
        ctx.session.full_name = full_name;
        ctx.session.status = BotStatus.ENTER__CONTACT;
        await ctx.reply(
          MessageText.SEND_CONTACT,
          this.getButtons(BotStatus.ENTER__CONTACT),
        );
        break;
      }
      case BotStatus.ENTER_BIRTH_DATE: {
        const date = (ctx.message as Message.TextMessage).text;
        if (!this.isValidDate(date)) {
          await ctx.reply(MessageText.VALIDATION_ERROR_DATE);
        } else {
          ctx.session.status = BotStatus.ENTER_BUSINESS;
          ctx.session.birth_date = date;
          await ctx.reply(MessageText.SEND_BUSINESS);
        }
        break;
      }
      case BotStatus.ENTER_BUSINESS: {
        const business = (ctx.message as Message.TextMessage).text;
        //TODO SAVE DB
        console.log(ctx.session);
        await this.usersRepository.create({
          bot_user_id: ctx.from.id,
          full_name: ctx.session.full_name,
          phone: ctx.session.phone,
          birth_date: ctx.session.birth_date,
          business,
          bot_user_status: BotStatus.MENU,
        });
        ctx.reply(MessageText.WELCOME);
      }
    }
  }

  // sendWebApp(ctx: Context, full_name: string) {
  //   return ctx.reply(full_name + ' test ishlash uchun bosing:', {
  //     reply_markup: {
  //       inline_keyboard: [
  //         [
  //           {
  //             text: 'Test ishlash',
  //             web_app: {
  //               url: 'https://test-task-uz.netlify.app/' + ctx.from.id,
  //             },
  //           },
  //         ],
  //       ],
  //       resize_keyboard: true,
  //       one_time_keyboard: true,
  //     },
  //   });
  // }
  getButtons(status: BotStatusType) {
    if (status === BotStatus.MENU) {
      return {
        reply_markup: {
          keyboard: [
            [{ text: KeyboardText.TEST_KOLESO }],
            [{ text: KeyboardText.TEST_BN }],
            // [{ text: KeyboardText.PROFILE }],
          ],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      };
    } else if (status === BotStatus.ENTER__CONTACT) {
      return {
        reply_markup: {
          keyboard: [
            [
              {
                text: KeyboardText.SHARE_CONTACT,
                request_contact: true,
              },
            ],
          ],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      };
    }
  }
  isValidDate(date: string): boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(date)) {
      return false;
    }

    const [year, month, day] = date.split('-').map(Number);

    const parsedDate = new Date(year, month - 1, day);

    // Check if the parsed date matches the input date
    if (
      parsedDate.getFullYear() === year &&
      parsedDate.getMonth() === month - 1 &&
      parsedDate.getDate() === day
    ) {
      return true;
    }

    return false;
  }
}
