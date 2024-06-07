import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';
import { BotStatus } from 'src/bot/const/status';

export class UsersRepository {
  constructor(@InjectKnex() private readonly knex: Knex) {}
  private getBuilder(trx?: Knex.Transaction) {
    return trx ? trx('users') : this.knex('users');
  }
  create(data: {
    bot_user_id: string;
    full_name: string;
    bot_user_status: BotStatus;
  }) {
    return this.getBuilder().insert(data).returning('id');
  }
  findBy(param: { bot_user_id: string }) {
    return this.getBuilder().where(param).first();
  }

  update(id: any, data: { full_name?: string; bot_user_status: BotStatus }) {
    return this.getBuilder().where({ id }).update(data).returning('id');
  }

  updateByBotUserId(
    bot_user_id: string,
    data: { full_name?: string; bot_user_status: BotStatus },
  ) {
    return this.getBuilder()
      .where({ bot_user_id })
      .update(data)
      .returning('full_name');
  }
}
