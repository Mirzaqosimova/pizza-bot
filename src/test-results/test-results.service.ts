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
    const hasTest = await this.testResultsRepository.findAll(bot_user_id);
    if (hasTest.length >= 3) {
      const sortedArray = hasTest.sort((a, b) => b.id - a.id);
      const topTwoIds = sortedArray.slice(0, 2).map((item) => item.id);
      await this.testResultsRepository.delete(hasUser.id, topTwoIds);
    }
    return this.testResultsRepository.create({
      user_id: hasUser.id,
      result_bn: payload,
    });
  }

  findAll(bot_user_id: string) {
    return this.testResultsRepository.findAll(bot_user_id);
  }
}
