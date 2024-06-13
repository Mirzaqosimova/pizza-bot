export const SessionObjectKeys = {
  STATUS: 'status',
};

export const BotStatus = {
  ENTER_NAME: 'ENTER_NAME',
  ENTER_BIRTH_DATE: 'ENTER_BIRTH_DATE',
  ENTER__CONTACT: 'ENTER_CONTACT',
  ENTER_BUSINESS: 'ENTER_BUSINESS',
  MENU: 'MENU',
  TEST: {
    KOLESO: 'TEST_KOLESO',
  },
};

export type BotStatusType =
  | (typeof BotStatus)[keyof typeof BotStatus]
  | (typeof BotStatus)['TEST']['KOLESO'][keyof (typeof BotStatus)['TEST']['KOLESO']];

export const KeyboardText = {
  NO: `Yo'q`,
  YES: 'Ha',
  TEST_KOLESO: 'Test Koleso',
  TEST_BN: 'Test bizness navigator',
  PROFILE: 'Profile taxrirlash',
  SHARE_CONTACT: `📲 Jo'natish`,
  BACK: 'Ortga',
};

export const MessageText = {
  WELCOME: 'Site ga hush keldingiz ',
  CHOOSE_MENU: 'Menulardan birini tanlang: ',
  MEETING:
    'Assalomu alaykum foydalanuchi, bu botda siz test ishlashingiz mumkin',
  SEND_NAME: 'Ismingizni kiriting:  ',
  SEND_BIRTH_DATE: 'Tugilgan sanangizni yil-oy-kun shaklida kiriting',
  SEND_CONTACT: 'Contactingizni kriting: ',
  VALIDATION_ERROR_DATE: 'Please enter a valid date in the format YYYY-MM-DD.',
  SEND_BUSINESS: 'Biznesingizni kiriting',
  WRONG_FORMAT: `No to'g'ri format`,
};
