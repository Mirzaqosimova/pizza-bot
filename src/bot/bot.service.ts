import { TestResultsRepository } from './../test-results/test-results.repository';
import {
  BotStatus,
  BotStatusType,
  KeyboardText,
  MessageText,
} from 'src/bot/const/const';
import { Injectable } from '@nestjs/common';
import { Ctx, On, Start, Update } from 'nestjs-telegraf';
import { UsersRepository } from 'src/users/users.repository';
import { CallBackData } from './const/callback-datas';
import { Message } from 'telegraf/typings/core/types/typegram';
import { MyContext } from './const/my-context';
import { KolesoCategories, TestKoleso, TestType } from './const/test';
import path, { join } from 'path';
import * as fs from 'fs';

@Update()
@Injectable()
export class BotService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly testResultsRepository: TestResultsRepository,
  ) {}

  @Start()
  async start(@Ctx() ctx: MyContext) {
    // const result = {
    //   personal_growth: 3,
    //   family: 3,
    //   friends_around: 3,
    //   value: 3,
    //   financial_stability: 3,
    //   hobby_and_interests: 3,
    //   sport_health: 3,
    //   career: 3,
    // };
    // await this.updateFile(result);
    // await ctx.replyWithDocument({
    //   source: 'updated_example.pdf',
    //   filename: 'updated_example.pdf',
    // });
    await this.checkSession(ctx);
  }
  async checkSession(ctx: MyContext) {
    const hasUser = await this.usersRepository.findBy({
      bot_user_id: String(ctx.from.id),
    });

    if (hasUser) {
      ctx.session.status = BotStatus.MENU;
      ctx.session.user_id = hasUser.id;
      await this.usersRepository.updateByBotUserId(ctx.from.id, {
        bot_user_status: BotStatus.MENU,
      });
      await ctx.reply(MessageText.CHOOSE_MENU, this.getButtons(BotStatus.MENU));
      return true;
    } else {
      await this.askName(ctx);
      return false;
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

  @On('callback_query')
  async onNotMyName(@Ctx() ctx: MyContext) {
    await ctx.answerCbQuery();
    await ctx.editMessageReplyMarkup(null);
    const callbackData = (ctx.callbackQuery as any).data;
    switch (callbackData) {
      case CallBackData.NOT_MY_NAME: {
        ctx.session.status = BotStatus.ENTER_NAME;
        await ctx.reply(MessageText.SEND_NAME);
        break;
      }
      case CallBackData.YES_MY_NAME: {
        ctx.session.status = BotStatus.ENTER__CONTACT;
        await ctx.reply(
          MessageText.SEND_CONTACT,
          this.getButtons(BotStatus.ENTER__CONTACT),
        );
      }
    }
    if (ctx.session.status === BotStatus.TEST.KOLESO) {
      const res = callbackData.split('|'); //0 is index of test, 1 is category, 2 is ball
      const newTest = TestKoleso[Number(res[0]) + 1];
      if (newTest) {
        ctx.session[res[1]]
          ? (ctx.session[res[1]] = ctx.session[res[1]] + Number(res[2]))
          : (ctx.session[res[1]] = Number(res[2]));
        if (newTest.category !== res[1]) {
          let progress: string = '';
          let text: string = '';
          switch (newTest.category) {
            case KolesoCategories.FAMILY: {
              progress = '🟧⬜️⬜️⬜️⬜️⬜️⬜️⬜️';
              text = 'Oila, Munosabatlar kategoriyasidagi savollar: ';
              break;
            }
            case KolesoCategories.FRIENDS_AROUND: {
              progress = '🟧🟧⬜️⬜️⬜️⬜️⬜️⬜️';
              text = 'Atrofdagi Do`stlar (muloqot) kategoriyasidagi savollar: ';
              break;
            }
            case KolesoCategories.VALUE: {
              progress = '🟧🟧🟧⬜️⬜️⬜️⬜️⬜️';
              text = 'Qadriyat kategoriyasidagi savollar: ';
              break;
            }
            case KolesoCategories.FINANCIAL_STABILITY: {
              progress = '🟧🟧🟧🟧⬜️⬜️⬜️⬜️';
              text = 'Moliyaviy barqarorlik kategoriyasidagi savollar: ';
              break;
            }
            case KolesoCategories.HOBBY_AND_INTERESTS: {
              progress = '🟧🟧🟧🟧🟧⬜️⬜️⬜️';
              text = 'Hobbi va qiziqishlar kategoriyasidagi savollar: ';
              break;
            }
            case KolesoCategories.SPORT_HEALTH: {
              progress = '🟧🟧🟧🟧🟧🟧⬜️⬜️';
              text = 'Sport-Sog`liq kategoriyasidagi savollar: ';
              break;
            }
            case KolesoCategories.CAREER: {
              progress = '🟧🟧🟧🟧🟧🟧🟧⬜️';
              text = 'Biznes-karera kategoriyasidagi savollar: ';
              break;
            }
          }
          setTimeout(async () => {
            await ctx.reply(progress);
          }, 2000);
          setTimeout(async () => {
            await ctx.reply(text);
          }, 2200);
          await this.startKolesoTest(ctx, Number(res[0]) + 1, 3000);
        } else {
          await this.startKolesoTest(ctx, Number(res[0]) + 1);
        }
      } else {
        ctx.session[res[1]]
          ? (ctx.session[res[1]] = ctx.session[res[1]] + Number(res[2]))
          : (ctx.session[res[1]] = Number(res[2]));

        const result = {
          personal_growth: ctx.session['personal_growth'] / 10,
          family: ctx.session['family'] / 5,
          friends_around: ctx.session['friends_around'] / 10,
          value: ctx.session['value'] / 8,
          financial_stability: ctx.session['financial_stability'] / 11,
          hobby_and_interests: ctx.session['hobby_and_interests'] / 5,
          sport_health: ctx.session['sport_health'] / 5,
          career: ctx.session['career'] / 9,
        };
        await this.updateFile(result);
        await this.testResultsRepository.create({
          user_id: ctx.session.user_id,
          results: result,
        });
        // await ctx.replyWithDocument({
        //   source: 'updated_example.pdf',
        //   filename: 'updated_example.pdf',
        // });
        await ctx.reply(
          `
          \nPersonal Growth: ${result.personal_growth},
          \nFamily: ${result.family},
          \nFriends Around: ${result.friends_around},
          \nValue: ${result.value},
          \nFinancial Stability: ${result.financial_stability},
          \nHobby and Interests: ${result.hobby_and_interests},
          \nSport and Health: ${result.sport_health},
          \nCareer: ${result.career}
`,
          this.getButtons(BotStatus.MENU),
        );
      }
    }
  }

  async updateFile(result: any) {
    const pdfFileName = 'test_koleso.pdf';
    const cwd = process.cwd();
    const pdfFilePath = join(cwd, 'src/bot/pdf', pdfFileName);
    // Read the existing PDF file
    const existingPdfBuffer = fs.readFileSync(pdfFilePath);

    // Modify the content as needed (for example, replacing a specific word)
    const existingContent = existingPdfBuffer.toString();
    const updatedContent = existingContent
      .replace('personal_growth_placeholder', result.personal_growth)
      .replace('family_placeholder', result.family)
      .replace('friends_around_placeholder', result.friends_around)
      .replace('value_placeholder', result.value)
      .replace('financial_stability_placeholder', result.financial_stability)
      .replace('hobby_and_interests_placeholder', result.hobby_and_interests)
      .replace('sport_health_placeholder', result.sport_health)
      .replace('career_placeholder', result.career);

    // Write the modified content back to the PDF file

    return fs.writeFileSync('updated_example.pdf', updatedContent);
  }

  @On('contact')
  async contact(@Ctx() ctx: MyContext) {
    const message = ctx.message as Message.ContactMessage;
    ctx.session.phone = message.contact.phone_number;
    ctx.session.status = BotStatus.ENTER_BIRTH_DATE;

    await ctx.reply(MessageText.SEND_BIRTH_DATE, {
      reply_markup: {
        remove_keyboard: true,
      },
    });
  }

  @On('text')
  async onText(@Ctx() ctx: MyContext) {
    if (!ctx.session.status) {
      const data = await this.checkSession(ctx);
      if (data === false) {
        return;
      }
    }

    const message = (ctx.message as Message.TextMessage).text;
    switch (ctx.session.status) {
      case BotStatus.ENTER_NAME: {
        ctx.session.full_name = message;
        ctx.session.status = BotStatus.ENTER__CONTACT;
        await ctx.reply(
          MessageText.SEND_CONTACT,
          this.getButtons(BotStatus.ENTER__CONTACT),
        );
        return;
      }
      case BotStatus.ENTER_BIRTH_DATE: {
        if (!this.isValidDate(message)) {
          await ctx.reply(MessageText.VALIDATION_ERROR_DATE);
        } else {
          ctx.session.status = BotStatus.ENTER_BUSINESS;
          ctx.session.birth_date = message;
          await ctx.reply(MessageText.SEND_BUSINESS);
        }
        return;
      }
      case BotStatus.ENTER_BUSINESS: {
        ctx.session.status = BotStatus.MENU;
        const [resp] = await this.usersRepository.create({
          bot_user_id: ctx.from.id,
          full_name: ctx.session.full_name,
          phone: ctx.session.phone,
          birth_date: ctx.session.birth_date,
          business: message,
          bot_user_status: BotStatus.MENU,
        });
        ctx.session.user_id = resp.id;

        await ctx.reply(MessageText.WELCOME, this.getButtons(BotStatus.MENU));
        return;
      }
      case BotStatus.TEST.KOLESO: {
        console.log(ctx.session);
        if (!ctx.session['koleso']) {
          return;
        }
        const session_balls = ctx.session['koleso'].split('|');
        const result = message.split(',');
        if (!result.length) {
          await ctx.reply(MessageText.WRONG_FORMAT);
          return;
        } else {
          let ball: number = 0;
          let is_success = true;
          result.forEach(async (data) => {
            const numberValue: number = +data;

            if (!isNaN(numberValue) && numberValue > 0 && numberValue <= 9) {
              const value =
                TestKoleso[session_balls[0]].variants[numberValue - 1].value;
              ball += value;
            } else {
              await ctx.reply(MessageText.WRONG_FORMAT);
              is_success = false;
              return;
            }
          });
          if (is_success === true) {
            ctx.session[session_balls[1]]
              ? (ctx.session[session_balls[1]] =
                  ctx.session[session_balls[1]] + ball)
              : (ctx.session[session_balls[1]] = ball);
            await this.startKolesoTest(ctx, Number(session_balls[0]) + 1);
          }
        }
      }
    }
    switch (message) {
      case KeyboardText.TEST_KOLESO: {
        const { status, user_id, ...rest } = ctx.session;
        ctx.session = { status: BotStatus.TEST.KOLESO, user_id };
        return this.startKolesoTest(ctx, 0);
      }
    }
  }
  async startKolesoTest(ctx: MyContext, i: number, time: number = 2000) {
    const test = TestKoleso[i];
    const keyBoards: any[] = [];
    let question = test.question;
    if (test.type === TestType.NUMBERS) {
      let t: any[] = [];
      for (let j = 1; j <= 5; j++) {
        t.push({ text: j, callback_data: i + '|' + test.category + '|' + j });
      }
      keyBoards.push(t);
      t = [];
      for (let j = 6; j <= 10; j++) {
        t.push({ text: j, callback_data: i + '|' + test.category + '|' + j });
      }

      keyBoards.push(t);
    } else if (test.type === TestType.SINGLE_ANSWER) {
      question += '\n\n';
      let j = 1;
      let t: any[] = [];
      test.variants.forEach((element) => {
        question += j + '. ' + element.answer + '\n';
        t.push({
          text: j,
          callback_data: i + '|' + test.category + '|' + element.value,
        });
        j++;
      });
      keyBoards.push(t);
    } else if (test.type === TestType.MULTIPLE_ANSWER) {
      question += '\n\n';
      let j = 1;
      test.variants.forEach((element) => {
        question += j + '. ' + element.answer + '\n';
        j++;
      });
      ctx.session['koleso'] = i + '|' + test.category;
    }
    if (i === 0) {
      await ctx.reply('Shahsiy o`sish kategoriyasidagi savollar: ', {
        reply_markup: { remove_keyboard: true },
      });
    }
    if (test.type !== TestType.MULTIPLE_ANSWER) {
      setTimeout(async () => {
        await ctx.reply(question, {
          reply_markup: {
            inline_keyboard: keyBoards,
          },
        });
      }, time);
    } else {
      setTimeout(async () => {
        await ctx.reply(
          question + `\n\nJavoblarni 1,2,3,4 ko'rinishida yuboring`,
        );
      }, time);
    }
  }

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
    if (
      parsedDate.getFullYear() === year &&
      parsedDate.getMonth() === month - 1 &&
      parsedDate.getDate() === day
    ) {
      return true;
    }

    return false;
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
}
