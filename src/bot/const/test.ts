export enum KolesoCategories {
  FAMILY = 'family',
  VALUE = 'value',
  HOBBY_AND_INTERESTS = 'hobby_and_interests',
  CAREER = 'career',
  FINANCIAL_STABILITY = 'financial_stability',
  PERSONAL_GROWTH = 'personal_growth',
  SPORT_HEALTH = 'sport_health',
  FRIENDS_AROUND = 'friends_around',
}
export const TESTS = {
  family: [
    {
      id: 1,
      question: `1 dan 10 gacha o'rganishni, rivojlanishni, yangi narsalarni o'rganishni qanchalik yaxshi ko'rishingizni aniqlang?`,
      is_numbers: true,
    },
    {
      id: 1,
      question: `Siz kechirishni va kechirim so'rashni bilasizmi?`,
      is_numbers: false,
      variants: [
        {
          answer: `Ha, men kechirishni va kechirim so'rashni bilaman`,
          value: 10,
        },
        {
          answer: `Men kechirishni bilaman, lekin o'zim kechirim so'ra olmayman.`,
          value: 6,
        },
        {
          answer: `Men kechirishni bilmayman, lekin o'zim kechirim so'rashim mumkin`,
          value: 7,
        },
        {
          answer: `Men kechirishni va kechirim so'rashni bilmayman`,
          value: 1,
        },
      ],
    },
  ],
  value: [],
};
