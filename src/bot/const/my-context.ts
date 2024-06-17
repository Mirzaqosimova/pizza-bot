import { Context } from 'telegraf';
import { BotStatusType } from './const';
import { TestBnCategory } from './test-bn';

interface SessionData {
  status: BotStatusType;
  user_id?: number;
  full_name?: string;
  birth_date?: string;
  phone?: string;
  tes_bn?: { no: number; category: TestBnCategory; average_ball: number }[];
}

export interface MyContext extends Context {
  session: SessionData;
}
