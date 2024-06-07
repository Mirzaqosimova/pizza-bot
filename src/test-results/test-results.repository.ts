import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';
import { CreateTestResultDto } from './dto/create-test-result.dto';

export class TestResultsRepository {
  constructor(@InjectKnex() private readonly knex: Knex) {}
  private getBuilder(trx?: Knex.Transaction) {
    return trx ? trx('test_results') : this.knex('test_results');
  }

  create(data: { user_id: any; results: CreateTestResultDto }) {
    return this.getBuilder().insert(data);
  }
  findAll(bot_user_id: string) {
    return this.getBuilder().select('*').where({ bot_user_id });
  }
  delete(id: number) {
    return this.getBuilder().where({ id }).del();
  }
}
