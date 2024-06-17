export enum KolesoCategories {
  PERSONAL_GROWTH = 'personal_growth', //10
  FAMILY = 'family', //5
  FRIENDS_AROUND = 'friends_around', //10
  VALUE = 'value', //8
  FINANCIAL_STABILITY = 'financial_stability', //11
  HOBBY_AND_INTERESTS = 'hobby_and_interests', //5
  SPORT_HEALTH = 'sport_health', //5
  CAREER = 'career', //9
}

export enum TestType {
  NUMBERS = 'numbers',
  SINGLE_ANSWER = 'single_answer',
  MULTIPLE_ANSWER = 'multiple_answer',
}
export const TestKoleso = [
  {
    question: `1 dan 10 gacha o'rganishni, rivojlanishni, yangi narsalarni o'rganishni qanchalik yaxshi ko'rishingizni aniqlang?`,
    category: KolesoCategories.PERSONAL_GROWTH,
    type: TestType.NUMBERS,
  },

  {
    question: `Sevgan insoningiz bormi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FAMILY,
    variants: [
      {
        answer: `Ha`,
        value: 10,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },

  {
    question: `Atrofingizdagi odamlarning Sog'liqni saqlash sohasida qanchalik rivojlanganligini 1 dan 10 gacha aniqlang`,
    category: KolesoCategories.FRIENDS_AROUND,
    type: TestType.NUMBERS,
  },

  {
    question: `O'zingizni qanchalik intizomli deb hisoblaysiz, 1 dan 10 gacha aniqlang? (bu erda 0 men har doim muddatlar va majburiyatlarni e'tiborsiz qoldiraman va 10 nima bo'lishidan qat'i nazar, men hamma narsani o'z vaqtida bajaraman)`,
    category: KolesoCategories.VALUE,
    type: TestType.NUMBERS,
  },

  {
    question: `Daromadingizning 100 foizini turli manbalarga taqsimlang.`,
    category: KolesoCategories.FINANCIAL_STABILITY,
    type: TestType.MULTIPLE_ANSWER,
    variants: [
      {
        answer: `1-sonli ish joyidan ish haqi`,
        value: 2,
      },
      {
        answer: `2-sonli ish joyidan ish haqi`,
        value: 2,
      },
      {
        answer: `Yarim-stavkali ish, noto'la ish`,
        value: 2,
      },
      {
        answer: `Bank depozitlari`,
        value: 2,
      },
      {
        answer: `Biznes № 1`,
        value: 3,
      },
      {
        answer: `Biznes № 2`,
        value: 3,
      },
      {
        answer: `Ko'chmas mulkni / mulkni ijaraga berish`,
        value: 2,
      },
      {
        answer: `Daromad manbalari yo'q`,
        value: 2,
      },
      {
        answer: `Boshqa`,
        value: 2,
      },
    ],
  },
  {
    question: `Siz shahsiy moliyaviy hisobotlarni yuritasizmi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FINANCIAL_STABILITY,
    variants: [
      {
        answer: `Ha`,
        value: 10,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },

  {
    question: `Sizning sevimli mashg'ulotingiz bormi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.HOBBY_AND_INTERESTS,
    variants: [
      {
        answer: `Ha, men buni muntazam ravishda bajaraman`,
        value: 10,
      },
      {
        answer: `Ha, imkonim bo'lganda bajaraman`,
        value: 7,
      },
      {
        answer: `Ha, men buni kamdan-kam bajaraman`,
        value: 4,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },

  {
    question: `Kuniga necha soat uxlaysiz? Odatda uyqudan keyin o'zingizni qanday his qilasiz?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.SPORT_HEALTH,
    variants: [
      {
        answer: `Men 5-8 soat uxlayman va hali ham yaxshi his qilaman`,
        value: 10,
      },
      {
        answer: `Agar 5-8 soat uxlasam va hali ham yomon his qilsam`,
        value: 8,
      },
      {
        answer: `Men 9-12 soat uxlayman va o'zimni yaxshi his qilaman`,
        value: 6,
      },
      {
        answer: `9-12 soat va hali ham yomon his`,
        value: 4,
      },
      {
        answer: `5 soatdan kamroq vaqt va men o'zimni yaxshi his qilyapman`,
        value: 2,
      },
      {
        answer: `5 soatdan kam va o'zingizni yaxshi his qilmaysiz`,
        value: 1,
      },
    ],
  },

  {
    question: `1 dan 10 gacha stressga chidamlilik darajasini, o'zingizni nazorat qilish va stressli sharoitlarda his-tuyg'ularingizni boshqarish qobiliyatini aniqlang.`,
    category: KolesoCategories.CAREER,
    type: TestType.NUMBERS,
  },
];

// export const TestKoleso = [
//   {
//     question: `1 dan 10 gacha o'rganishni, rivojlanishni, yangi narsalarni o'rganishni qanchalik yaxshi ko'rishingizni aniqlang?`,
//     category: KolesoCategories.PERSONAL_GROWTH,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `O'zingizga bo'lgan ishonchni 10 ball bilan baholang. (bu erda 10 har qanday vaziyatda ishonch, hatto notanish ham)`,
//     category: KolesoCategories.PERSONAL_GROWTH,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `Maqsadlarni qanchalik tez-tez qo'yganingizni va ularga erishishingizni 1 dan 10 gacha aniqlang. (1 - Men hech qachon maqsad qo'ymayman yoki hech narsani rejalashtirmayman, men o'z-o'zidan harakat qilaman 10 - men muntazam ravishda o'zimga maqsadlar qo'yaman, hamma narsani rejalashtiraman va har doim rejalashtirgan narsamga erishaman)`,
//     category: KolesoCategories.PERSONAL_GROWTH,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `1 dan 10 gacha odamlarni qanchalik tushunganingizni aniqlang? 1 - yomon, ular ko'pincha aldashadi. 10 - Men har doim uning harakatlarini aniq aniqlayman va oldindan aytib bera olaman`,
//     category: KolesoCategories.PERSONAL_GROWTH,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `1 dan 10 gacha yozing, sizning muloqot qobiliyatingiz qanchalik rivojlangan? 1 - Menga odamlar bilan umumiy til topish qiyin 10 - Men osongina yangi tanishlar orttiraman, suhbatdoshimni faol tinglayman, o'zim haqimda yaxshi taassurot qoldiraman`,
//     category: KolesoCategories.PERSONAL_GROWTH,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `O'zingizni qanchalik faol deb hisoblaysiz?`,
//     category: KolesoCategories.PERSONAL_GROWTH,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `1 dan 10 gacha aniqlang, odatda vaziyatga qanchalik mos kiyinasiz va o'zingizni qulay va ishonchli his qilasizmi?`,
//     category: KolesoCategories.PERSONAL_GROWTH,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `San'atga bo'lgan munosabatingizni baholang (san'atga muhabbat, san'atning har qanday turiga jalb qilish). 1 - Menimcha, san'at keraksiz narsa, men san'atni yoqtirmayman 10 - Men san'atni yaxshi ko'raman, men o'zim muntazam ravishda san'at bilan shug'ullanaman.`,
//     category: KolesoCategories.PERSONAL_GROWTH,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `Siz kechirishni va kechirim so'rashni bilasizmi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.PERSONAL_GROWTH,
//     variants: [
//       {
//         answer: `Ha, men kechirishni va kechirim so'rashni bilaman`,
//         value: 10,
//       },
//       {
//         answer: `Men kechirishni bilaman, lekin o'zim kechirim so'ra olmayman.`,
//         value: 6,
//       },
//       {
//         answer: `Men kechirishni bilmayman, lekin o'zim kechirim so'rashim mumkin`,
//         value: 7,
//       },
//       {
//         answer: `Men kechirishni va kechirim so'rashni bilmayman`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `O'zingizni sevaman va hurmat qilaman deb ayta olasizmi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.PERSONAL_GROWTH,
//     variants: [
//       {
//         answer: `Ha`,
//         value: 10,
//       },
//       {
//         answer: `Yo'qdan ko'ra ko'proq ha`,
//         value: 8,
//       },
//       {
//         answer: `Ha dan ortiq emas`,
//         value: 5,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `Sevgan insoningiz bormi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FAMILY,
//     variants: [
//       {
//         answer: `Ha`,
//         value: 10,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `Siz oilangizga g'amxo'rlik, mehr-muhabbat, qulay va xavfsiz sharoitlar bilan ta'minlaysizmi, ularga qadrli narsalarni berasizmi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FAMILY,
//     variants: [
//       {
//         answer: `Ha, men doimo oilam qulay va xavfsiz joyda yashashiga intilaman, oila a’zolarim bilan muntazam ravishda vaqt o‘tkazaman.`,
//         value: 10,
//       },
//       {
//         answer: `Ha, men oilam qulay va xavfsiz joyda yashashga intilaman, lekin oilam bilan kam vaqt o'tkazaman.`,
//         value: 8,
//       },
//       {
//         answer: `Biz mavjud sharoitda yashashga majbur bo'lib, kamdan-kam hollarda oilaga etarlicha vaqt va e'tibor berishim mumkin;`,
//         value: 5,
//       },
//       {
//         answer: `Yo'q, men yordam berolmayman va harakat qilmayman`,
//         value: 1,
//       },
//     ],
//   },

//   {
//     question: `Oila a'zolaringiz bilan qanchalik yaqin va ishonchli munosabatlarga ega deb o'ylaysiz? 1 dan 10 gacha.`,
//     category: KolesoCategories.FAMILY,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `Sizning hayotiy qadriyatlaringiz umir yo'ldoshingiz bilan qanchalik mos keladi deb o'ylaysiz? 1 dan 10 gacha baholang, bu erda 1 - qadriyatlar to'qnashuvi va 10 - uyg'unlik, aksariyat qadriyatlar va qarashlarning mos kelishi.`,
//     category: KolesoCategories.FAMILY,
//     type: TestType.NUMBERS,
//   },

//   {
//     question: `Sizning oilaviy shajarangiz bormi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FAMILY,
//     variants: [
//       {
//         answer: `Ha, 5 avlod`,
//         value: 6,
//       },
//       {
//         answer: `Ha,  7  va undan yuqori`,
//         value: 10,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },

//   {
//     question: `Atrofingizdagi odamlarning Sog'liqni saqlash sohasida qanchalik rivojlanganligini 1 dan 10 gacha aniqlang`,
//     category: KolesoCategories.FRIENDS_AROUND,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `Atrofingizdagi odamlar moliya sohasida qanchalik rivojlanganligini 1 dan 10 gacha aniqlang`,
//     category: KolesoCategories.FRIENDS_AROUND,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `Atrofingizdagi odamlarning Dam olish sohasida qanchalik rivojlanganligini 1 dan 10 gacha aniqlang`,
//     category: KolesoCategories.FRIENDS_AROUND,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `Atrofingizdagi odamlarning oila va munosabatlar sohasida qanchalik rivojlanganligini 1 dan 10 gacha aniqlang.`,
//     category: KolesoCategories.FRIENDS_AROUND,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `Atrofingizdagi odamlarning Karyera sohasida qanchalik rivojlanganligini 1 dan 10 gacha aniqlang`,
//     category: KolesoCategories.FRIENDS_AROUND,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `Atrofingizdagi odamlarning shaxsiy o'sish sohasida qanchalik rivojlanganligini 1 dan 10 gacha aniqlang`,
//     category: KolesoCategories.FRIENDS_AROUND,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `Atrofingizdagi odamlarning Atrof-muhit sohasida qanchalik rivojlanganligini 1 dan 10 gacha aniqlang`,
//     category: KolesoCategories.FRIENDS_AROUND,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `Atrofingizdagi odamlarning Ma’naviyat sohasida qanchalik rivojlanganligini 1 dan 10 gacha aniqlang`,
//     category: KolesoCategories.FRIENDS_AROUND,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `O'zingizni odamlarni sevadigan odam deb hisoblaysizmi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FRIENDS_AROUND,
//     variants: [
//       {
//         answer: `Ha`,
//         value: 10,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `Siz o'zingizni boshqa odamlar, tabiat, koinot bilan bog'liq bo'lgan kattaroq narsaning bir qismi deb hisoblaysizmi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FRIENDS_AROUND,
//     variants: [
//       {
//         answer: `Ha`,
//         value: 10,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `O'zingizni qanchalik intizomli deb hisoblaysiz, 1 dan 10 gacha aniqlang? (bu erda 0 men har doim muddatlar va majburiyatlarni e'tiborsiz qoldiraman va 10 nima bo'lishidan qat'i nazar, men hamma narsani o'z vaqtida bajaraman)`,
//     category: KolesoCategories.VALUE,
//     type: TestType.NUMBERS,
//   },

//   {
//     question: `Yomon odatlaringiz bormi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.VALUE,
//     variants: [
//       {
//         answer: `Ha`,
//         value: 1,
//       },
//       {
//         answer: `Yo'q`,
//         value: 10,
//       },
//     ],
//   },
//   {
//     question: `Hayotdagi qadriyatlaringizni bilasizmi, siz uchun nima eng qimmatli va muhim?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.VALUE,
//     variants: [
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//       {
//         answer: `Men bilaman deb o'ylayman, lekin men bu haqda jiddiy o'ylamaganman`,
//         value: 5,
//       },
//       {
//         answer: `Ha, men diagnostika qildim, ularni yozib oldim`,
//         value: 10,
//       },
//     ],
//   },
//   {
//     question: `Sizni o'rganadigan va rivojlantiradigan ustoz, ustoz bormi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.VALUE,
//     variants: [
//       {
//         answer: `Ha, men u bilan muntazam muloqot qilaman`,
//         value: 8,
//       },
//       {
//         answer: `Ha, mening bir nechta murabbiylarim bor, ular bilan muntazam muloqot qilaman`,
//         value: 10,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//       {
//         answer: `Menda o'rnak oladigan odam bor, uni kuzatishga harakat qilaman.`,
//         value: 5,
//       },
//     ],
//   },
//   {
//     question: `Siz xayriya, ko'ngillilik yoki ijtimoiy faoliyat bilan shug'ullanasizmi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.VALUE,
//     variants: [
//       {
//         answer: `Ha, men muntazam va faol ishtirok etaman.`,
//         value: 10,
//       },
//       {
//         answer: `Kamdan-kam hollarda, vaqti-vaqti bilan.`,
//         value: 5,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `Siz boshqalarga o'rgatasizmi, o'z tajribangizni va bilimingizni uzatasizmi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.VALUE,
//     variants: [
//       {
//         answer: `Ha, har doim.`,
//         value: 10,
//       },
//       {
//         answer: `Kamdan-kam hollarda, vaqti-vaqti bilan.`,
//         value: 7,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `1 dan 10 gacha boshqa odamlarga qanchalik hamdard bo'lishingiz mumkinligini aniqlang.`,
//     category: KolesoCategories.VALUE,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `Sizning hayot missiyangiz, maqsadingiz bormi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.VALUE,
//     variants: [
//       {
//         answer: `Ha, men shaxsiy vazifamni aniq bilaman`,
//         value: 10,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `Daromadingizning 100 foizini turli manbalarga taqsimlang.`,
//     category: KolesoCategories.FINANCIAL_STABILITY,
//     type: TestType.MULTIPLE_ANSWER,
//     variants: [
//       {
//         answer: `1-sonli ish joyidan ish haqi`,
//         value: 2,
//       },
//       {
//         answer: `2-sonli ish joyidan ish haqi`,
//         value: 2,
//       },
//       {
//         answer: `Yarim-stavkali ish, noto'la ish`,
//         value: 2,
//       },
//       {
//         answer: `Bank depozitlari`,
//         value: 2,
//       },
//       {
//         answer: `Biznes № 1`,
//         value: 3,
//       },
//       {
//         answer: `Biznes № 2`,
//         value: 3,
//       },
//       {
//         answer: `Ko'chmas mulkni / mulkni ijaraga berish`,
//         value: 2,
//       },
//       {
//         answer: `Daromad manbalari yo'q`,
//         value: 2,
//       },
//       {
//         answer: `Boshqa`,
//         value: 2,
//       },
//     ],
//   },
//   {
//     question: `Siz shahsiy moliyaviy hisobotlarni yuritasizmi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FINANCIAL_STABILITY,
//     variants: [
//       {
//         answer: `Ha`,
//         value: 10,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `Byudjetingizni rejalashtiryapsizmi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FINANCIAL_STABILITY,
//     variants: [
//       {
//         answer: ` Yo'q`,
//         value: 1,
//       },
//       {
//         answer: `Ha, bir oyga`,
//         value: 3,
//       },
//       {
//         answer: `Ha, olti oyga`,
//         value: 6,
//       },
//       {
//         answer: `Ha, bir yil yoki undan ko'proq`,
//         value: 10,
//       },
//     ],
//   },
//   {
//     question: `Moliyaviy yangiliklardan xabardormisiz?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FINANCIAL_STABILITY,
//     variants: [
//       {
//         answer: `Kamdan-kam hollarda, oyiga bir marta`,
//         value: 3,
//       },
//       {
//         answer: `Kamdan-kam hollarda, har ikki haftada bir marta`,
//         value: 6,
//       },
//       {
//         answer: `Muntazam ravishda, har hafta`,
//         value: 10,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `Sizning yaqin kelajakda yoki uzoq muddatli moliyaviy maqsadlaringiz bormi (ko'chmas mulk, avtomobil sotib olish, ta'lim, sayohat, davolanish va h.k.)?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FINANCIAL_STABILITY,
//     variants: [
//       {
//         answer: `Ha`,
//         value: 10,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `Omonat uchun alohida hisobingiz bormi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FINANCIAL_STABILITY,
//     variants: [
//       {
//         answer: `Ha`,
//         value: 10,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `Sizning daromadingiz oylik xarajatlaringizdan yuqorimi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FINANCIAL_STABILITY,
//     variants: [
//       {
//         answer: `Ha, daromad xarajatlardan yuqori, lekin muntazam ravishda tejashni  iloji yo'q.`,
//         value: 7,
//       },
//       {
//         answer: `Ha, daromad xarajatlardan yuqori va muntazam ravishda 10% yoki undan ko'proq tejashga iloji bor.`,
//         value: 10,
//       },
//       {
//         answer: `Xarajatlar daromaddan ko'p , muntazam ravishda qarz olishingiz kerak bo'ladi.`,
//         value: 1,
//       },
//       {
//         answer: `Xarajatlar daromaddan ko'p , muntazam ravishda jamg'armani sarflash kerak bo'ladi.`,
//         value: 5,
//       },
//     ],
//   },
//   {
//     question: `Qarzlaringiz bormi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FINANCIAL_STABILITY,
//     variants: [
//       {
//         answer: `Foizsiz qarzlar mavjud`,
//         value: 2,
//       },
//       {
//         answer: `Foizlar bilan qarzlar mavjud`,
//         value: 1,
//       },
//       {
//         answer: `Rivojlanayotgan va potentsial daromad keltiradigan biznes uchun qulay foiz stavkasida kredit olingan.`,
//         value: 6,
//       },
//       {
//         answer: `Xarajatlar daromaddan ko'p , muntazam ravishda jamg'armani sarflash kerak bo'ladi.  Narxning oshishi mumkin bo'lgan ko'chmas mulkni sotib olish uchun qulay foiz stavkasida kredit mavjud.`,
//         value: 7,
//       },
//       {
//         answer: `Iste'mol krediti mavjud.`,
//         value: 3,
//       },
//       {
//         answer: `Qarzlar yo'q`,
//         value: 10,
//       },
//     ],
//   },
//   {
//     question: `Mavjud mablag'laringizni moliyaviy maqsadlar uchun taqsimlaysizmi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FINANCIAL_STABILITY,
//     variants: [
//       {
//         answer: `Ha`,
//         value: 10,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `Sizning hayotingizni 6 oy davomida qoplash uchun etarli moliyaviy yostiq bormi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FINANCIAL_STABILITY,
//     variants: [
//       {
//         answer: `Ha`,
//         value: 10,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },

//   {
//     question: `1 dan 10 gacha o'tgan oydagi kayfiyatingizni aniqlang. (bu erda 0 salbiy va 10 ijobiy)`,
//     category: KolesoCategories.HOBBY_AND_INTERESTS,
//     type: TestType.NUMBERS,
//   },

//   {
//     question: `Sizning sevimli mashg'ulotingiz bormi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.HOBBY_AND_INTERESTS,
//     variants: [
//       {
//         answer: `Ha, men buni muntazam ravishda bajaraman`,
//         value: 10,
//       },
//       {
//         answer: `Ha, imkonim bo'lganda bajaraman`,
//         value: 7,
//       },
//       {
//         answer: `Ha, men buni kamdan-kam bajaraman`,
//         value: 4,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `Dam olishda bo'lganingizda, ish yoki boshqa tashvishlar haqida o'ylaysizmi yoki umuman aloqangiz uzilib, ta'tildan zavqlanasizmi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.HOBBY_AND_INTERESTS,
//     variants: [
//       {
//         answer: `Men ish va boshqa tashvishlar haqida o'ylayman`,
//         value: 1,
//       },
//       {
//         answer: `Men dam olishni ish bilan birlashtirishga harakat qilaman`,
//         value: 5,
//       },
//       {
//         answer: `Men tashvishlardan butunlay uzilib, ta'tildan zavqlanaman`,
//         value: 10,
//       },
//     ],
//   },
//   {
//     question: `Ta'tilingizni oldindan rejalashtirasizmi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.HOBBY_AND_INTERESTS,
//     variants: [
//       {
//         answer: `Ha, bir yil oldin`,
//         value: 10,
//       },
//       {
//         answer: `Ha, olti oy oldin`,
//         value: 7,
//       },
//       {
//         answer: `Ha, bir oy oldin`,
//         value: 4,
//       },
//       {
//         answer: `Yo'q, men buni rejalashtirmayman`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `Sizningcha, toza havoda, tabiatda yetarlicha vaqt o'tkazasizmi?`,
//     category: KolesoCategories.HOBBY_AND_INTERESTS,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `Oziqlanish holatingizga mos keladigan variantni tanlang.`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.SPORT_HEALTH,
//     variants: [
//       {
//         answer: `Men ushbu sohadagi mutaxassis bilan “to'g'ri ovqatlanish” haqida shaxsiy dasturda ishladim va ushbu dasturga muvofiq ovqatlanaman`,
//         value: 10,
//       },
//       {
//         answer: `Men mustaqil ravishda “to'g'ri ovqatlanish” bo'yicha adabiyot va boshqa materiallarni o'rganib chiqdim, o'zim uchun dastur tuzdim va unga muvofiq ovqatlanaman`,
//         value: 7,
//       },
//       {
//         answer: `Dastur men uchun ishlab chiqilgan, lekin men unga amal qilmayman`,
//         value: 4,
//       },
//       {
//         answer: `Men bu mavzuni o'rganmaganman, men xohlagancha ovqatlanaman`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `Kuniga necha soat uxlaysiz? Odatda uyqudan keyin o'zingizni qanday his qilasiz?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.SPORT_HEALTH,
//     variants: [
//       {
//         answer: `Men 5-8 soat uxlayman va hali ham yaxshi his qilaman`,
//         value: 10,
//       },
//       {
//         answer: `Agar 5-8 soat uxlasam va hali ham yomon his qilsam`,
//         value: 8,
//       },
//       {
//         answer: `Men 9-12 soat uxlayman va o'zimni yaxshi his qilaman`,
//         value: 6,
//       },
//       {
//         answer: `9-12 soat va hali ham yomon his`,
//         value: 4,
//       },
//       {
//         answer: `5 soatdan kamroq vaqt va men o'zimni yaxshi his qilyapman`,
//         value: 2,
//       },
//       {
//         answer: `5 soatdan kam va o'zingizni yaxshi his qilmaysiz`,
//         value: 1,
//       },
//     ],
//   },

//   {
//     question: `Jismoniy faollik holatiga mos keladigan variantni tanlang.`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.SPORT_HEALTH,
//     variants: [
//       {
//         answer: `Men mutaxassis bilan shaxsiy jismoniy tarbiya dasturi orqali ishladim va ushbu dasturni muntazam ravishda kuzatib boraman.`,
//         value: 10,
//       },
//       {
//         answer: `Men bu masalani mustaqil o'rganib chiqdim va o'zim uchun jismoniy mashqlar dasturini tuzdim va unga amal qildim`,
//         value: 7,
//       },
//       {
//         answer: `Men tayyor dasturni topdim va ushbu dasturni muntazam ravishda mashq qilaman.`,
//         value: 5,
//       },
//       {
//         answer: `Men uchun yaxshi ishlab chiqilgan dastur bor, lekin men unga amal qilmayman`,
//         value: 3,
//       },
//       {
//         answer: `Men bu mavzuni o'rganmaganman, ko'p jismoniy faolliksiz yashayman`,
//         value: 1,
//       },
//     ],
//   },

//   {
//     question: `Surunkali kasalliklaringiz bormi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.SPORT_HEALTH,
//     variants: [
//       {
//         answer: `Ha`,
//         value: 5,
//       },
//       {
//         answer: `Yo'q`,
//         value: 10,
//       },
//       {
//         answer: `Bilmayman`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `So'nggi 6 oy ichida siz butun tanangizning holatini tekshirish - diagnostikadan o'tkazdingizmi (check-up)?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.SPORT_HEALTH,
//     variants: [
//       {
//         answer: `Ha`,
//         value: 10,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },

//   {
//     question: `O'z oldingizga qo'ygan maqsadlarga erishish uchun ichki motivatsiyangiz bormi?`,
//     category: KolesoCategories.CAREER,
//     type: TestType.NUMBERS,
//   },
//   {
//     question: `1 dan 10 gacha stressga chidamlilik darajasini, o'zingizni nazorat qilish va stressli sharoitlarda his-tuyg'ularingizni boshqarish qobiliyatini aniqlang.`,
//     category: KolesoCategories.CAREER,
//     type: TestType.NUMBERS,
//   },

//   {
//     question: `Analitik fikrlash qanchalik rivojlanganligini aniqlang?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.CAREER,
//     variants: [
//       {
//         answer: `  Qaror qabul qilish yoki fikrni shakllantirishdan oldin men har doim ma'lumotni turli tomonlardan tahlil qilaman, savollar beraman va ma'lumotlar manbasini tekshiraman.`,
//         value: 10,
//       },
//       {
//         answer: `  Qaror qabul qilish yoki fikrni shakllantirishdan oldin men ba'zan ma'lumotni tahlil qilaman, savollar beraman va ma'lumotlar manbasini tekshiraman.`,
//         value: 6,
//       },
//       {
//         answer: `    Men odatda ma'lumot manbasini tekshirmayman, bir nechta savol bermayman va odamga ko'proq ishonchga asoslangan qarorlar qabul qilaman.`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `Tasavvur qiling-a, sizda hayotingizni yaxshilash uchun imkoniyat bor. Odatda nima qilasiz?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.CAREER,
//     variants: [
//       {
//         answer: `  Men o'tib ketaman, imkoniyatlardan foydalanmayman, xavf va o'zgarishlarni yoqtirmayman.`,
//         value: 1,
//       },
//       {
//         answer: `  Men odatda imkoniyatlardan unumli foydalanishga harakat qilaman`,
//         value: 3,
//       },
//       {
//         answer: `  Menimcha, uzoq vaqt shubhalanaman va oxir-oqibat imkoniyatlardan foydalanmayman.`,
//         value: 6,
//       },
//       {
//         answer: `  Men tahlil qilaman, maslahatlashaman, hamma narsani o'lchab ko'raman va agar kerak bo'lsa, imkoniyatdan foydalanaman`,
//         value: 10,
//       },
//     ],
//   },
//   {
//     question: `Odatda mojarolarni qanday hal qilasiz?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.CAREER,
//     variants: [
//       {
//         answer: `  Men mojaroni madaniyatli va xotirjam tarzda hal qilishga harakat qilaman.`,
//         value: 10,
//       },
//       {
//         answer: `  Men murosa topishga harakat qilaman`,
//         value: 7,
//       },
//       {
//         answer: `  Men uchun asosiy narsa har qanday vosita bilan bahsda g'alaba qozonishdir.`,
//         value: 5,
//       },
//       {
//         answer: `  Men hatto o'zimning zararimga ham taslim bo'laman.`,
//         value: 1,
//       },
//     ],
//   },
//   {
//     question: `Odatda, agar biror narsaga va'da bersangiz, buni qilasizmi yoki nima uchun bu ish bajarmaganingizga bahona topasizmi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.CAREER,
//     variants: [
//       {
//         answer: `  Ba'zan bahona topaman`,
//         value: 1,
//       },
//       {
//         answer: `  Men deyarli har doim nima bo'lishidan qat'iy nazar va'dalarimni bajaraman.`,
//         value: 10,
//       },
//       {
//         answer: `  Men ko'pincha nima uchun bu ishni bajarmaganimga bahona topaman.`,
//         value: 6,
//       },
//     ],
//   },
//   {
//     question: `Agar xato qilsangiz, odatda nima qilasiz?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.CAREER,
//     variants: [
//       {
//         answer: `  Men xatoimni tan olaman`,
//         value: 7,
//       },
//       {
//         answer: `  Men xatoimni tan olmayman`,
//         value: 1,
//       },
//       {
//         answer: `  Men xatoni tan olaman, uni tuzataman va kelajakda takrorlamaslik uchun xulosa chiqaraman.`,
//         value: 10,
//       },
//     ],
//   },
//   {
//     question: `Odatda ishingizni qanday bajarasiz?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.CAREER,
//     variants: [
//       {
//         answer: `  Men qancha kerak bo'lsa, shuncha qilaman, lekin ortiq emas`,
//         value: 10,
//       },
//       {
//         answer: `  Iloji bo'lsa ishlamaslikka harakat qilaman`,
//         value: 6,
//       },
//       {
//         answer: `  Men o'z ishimni mukammal bajaraman, ishlarni oxirigacha ko'raman va qanday qilib yaxshiroq qilishim haqida doimo o'ylayman.`,
//         value: 1,
//       },
//       {
//         answer: `  Ishchi - men doimo ortiqcha ishlayapman, shuning uchun munosabatlarda, sog'lig'ida va hokazolarda muammolar mavjud.`,
//         value: 1,
//       },
//     ],
//   },

//   {
//     question: `1 dan 10 gacha bo'lgan shkala bo'yicha, siz qilayotgan ishingizdan qanchalik zavqlanasiz?`,
//     category: KolesoCategories.CAREER,
//     type: TestType.NUMBERS,
//   },
// ];
