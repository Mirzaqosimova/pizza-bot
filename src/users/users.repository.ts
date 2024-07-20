import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';

export class UsersRepository {
  constructor(@InjectKnex() private readonly knex: Knex) {}
  private getBuilder(trx?: Knex.Transaction) {
    return trx ? trx('users') : this.knex('users');
  }
  findBy(param: { bot_user_id: string }) {
    return this.getBuilder().where(param).first();
  }
}
