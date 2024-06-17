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
    BN: 'TEST_BN',
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
  WELCOME: 'Botga ga hush keldingiz, \nMenulardan birini tanlang: ',
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

export const PhotoIds = {
  BN_START:
    'AgACAgIAAxkBAAI652ZwchxdQeq7sDtYZqPwtiLxt_yBAAI-2zEbeFiJS6XqmDa0qikIAQADAgADeQADNQQ',
  INTRODUCING:
    'AgACAgIAAxkBAAI66WZwckZttnlaptlNy2auA8uQvEOHAAJA2zEbeFiJSzfFGUlEfhtMAQADAgADeQADNQQ',
  BN_BUSINESS:
    'AgACAgIAAxkBAAI662ZwclEvCL8sTIWv6OmUqhzM6ahWAAJB2zEbeFiJS9StafdVnvjdAQADAgADeQADNQQ',
  BN_SOFT_SKILLS:
    'AgACAgIAAxkBAAI67WZwcly13SPHxjlsj83FRIXHIRZQAAJC2zEbeFiJS2SjdckQDq2iAQADAgADeQADNQQ',
  BN_THINK:
    'AgACAgIAAxkBAAI672ZwcmUKtmdxa1quVeJuqfMrp-1sAAJD2zEbeFiJSwsFxoAbCElzAQADAgADeQADNQQ',
  BN_ENERGY:
    'AgACAgIAAxkBAAI68WZwcnH_XvqTzJNKCxaYumQOzxcSAAJE2zEbeFiJS0V1SiRSijxyAQADAgADeQADNQQ',
};
