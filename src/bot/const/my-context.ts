import { Context } from 'telegraf';

interface SessionData {
  status: string;
  user_id?: number;
  phone?: string;
}

export interface MyContext extends Context {
  session: SessionData;
  i18n: any;
}
