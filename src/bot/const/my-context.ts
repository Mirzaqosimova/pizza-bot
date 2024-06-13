import { Context } from 'telegraf';
import { BotStatusType } from './const';

interface SessionData {
  status: BotStatusType;
  user_id?: number;
  full_name?: string;
  birth_date?: string;
  phone?: string;
}

export interface MyContext extends Context {
  session: SessionData;
}
