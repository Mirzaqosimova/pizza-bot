import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTestResultDto } from './dto/create-test-result.dto';
import { TestResultsRepository } from './test-results.repository';
import { UsersRepository } from 'src/users/users.repository';

@Injectable()
export class TestResultsService {
  constructor(
    private readonly testResultsRepository: TestResultsRepository,
    private readonly usersRepository: UsersRepository,
  ) {}
  async create(bot_user_id: string, payload: CreateTestResultDto) {
    const hasUser = await this.usersRepository.findBy({ bot_user_id });
    if (!hasUser) {
      throw new NotFoundException('Foydalanuvchi topilmadi');
    }
    return this.testResultsRepository.create({
      user_id: hasUser.id,
      results: payload,
    });
  }

  findAll(bot_user_id: string) {
    return this.testResultsRepository.findAll(bot_user_id);
  }

  remove(id: number) {
    return this.testResultsRepository.delete(id);
  }
}
