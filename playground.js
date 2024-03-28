const districts = [
    {
        "id": 15,
        "region_id": 1,
        "uz": "Amudaryo tumani",
        "ru": "Амударьинский район"
    },
    {
        "id": 16,
        "region_id": 1,
        "uz": "Beruniy tumani",
        "ru": "Берунийский район"
    },
    {
        "id": 17,
        "region_id": 1,
        "uz": "Kegayli tumani",
        "ru": "Кегейлийский район"
    },
    {
        "id": 18,
        "region_id": 1,
        "uz": "Qonliko‘l tumani",
        "ru": "Канлыкульский район"
    },
    {
        "id": 19,
        "region_id": 1,
        "uz": "Qorao‘zak tumani",
        "ru": "Караузякский район"
    },
    {
        "id": 20,
        "region_id": 1,
        "uz": "Qo‘ng‘irot tumani",
        "ru": "Кунградский район"
    },
    {
        "id": 21,
        "region_id": 1,
        "uz": "Mo‘ynoq tumani",
        "ru": "Муйнакский район"
    },
    {
        "id": 22,
        "region_id": 1,
        "uz": "Nukus tumani",
        "ru": "Нукусский район"
    },
    {
        "id": 23,
        "region_id": 1,
        "uz": "Nukus shahri",
        "ru": "город Нукус"
    },
    {
        "id": 24,
        "region_id": 1,
        "uz": "Taxtako‘pir tumani",
        "ru": "Тахтакупырский район"
    },
    {
        "id": 25,
        "region_id": 1,
        "uz": "To‘rtko‘l tumani",
        "ru": "Турткульский район"
    },
    {
        "id": 26,
        "region_id": 1,
        "uz": "Xo‘jayli tumani",
        "ru": "Ходжейлийский район"
    },
    {
        "id": 27,
        "region_id": 1,
        "uz": "Chimboy tumani",
        "ru": "Чимбайский район"
    },
    {
        "id": 28,
        "region_id": 1,
        "uz": "Shumanay tumani",
        "ru": "Шуманайский район"
    },
    {
        "id": 29,
        "region_id": 1,
        "uz": "Ellikqal‘a tumani",
        "ru": "Элликкалинский район"
    },
    {
        "id": 30,
        "region_id": 2,
        "uz": "Andijon shahri",
        "ru": "город Андижан"
    },
    {
        "id": 31,
        "region_id": 2,
        "uz": "Andijon tumani",
        "ru": "Андижанский район"
    },
    {
        "id": 32,
        "region_id": 2,
        "uz": "Asaka tumani",
        "ru": "Асакинский район"
    },
    {
        "id": 33,
        "region_id": 2,
        "uz": "Baliqchi tumani",
        "ru": "Балыкчинский район"
    },
    {
        "id": 34,
        "region_id": 2,
        "uz": "Buloqboshi tumani",
        "ru": "Булакбашинский район"
    },
    {
        "id": 35,
        "region_id": 2,
        "uz": "Bo‘z tumani",
        "ru": "Бозский район"
    },
    {
        "id": 36,
        "region_id": 2,
        "uz": "Jalaquduq tumani",
        "ru": "Джалакудукский район"
    },
    {
        "id": 37,
        "region_id": 2,
        "uz": "Izbosgan tumani",
        "ru": "Избасканский район"
    },
    {
        "id": 38,
        "region_id": 2,
        "uz": "Qorasuv shahri",
        "ru": "город Карасув"
    },
    {
        "id": 39,
        "region_id": 2,
        "uz": "Qo‘rg‘ontepa tumani",
        "ru": "Кургантепинский район"
    },
    {
        "id": 40,
        "region_id": 2,
        "uz": "Marhamat tumani",
        "ru": "Мархаматский район"
    },
    {
        "id": 41,
        "region_id": 2,
        "uz": "Oltinko‘l tumani",
        "ru": "Алтынкульский район"
    },
    {
        "id": 42,
        "region_id": 2,
        "uz": "Paxtaobod tumani",
        "ru": "Пахтаабадский район"
    },
    {
        "id": 43,
        "region_id": 2,
        "uz": "Ulug‘nor tumani",
        "ru": "Улугнорский район"
    },
    {
        "id": 44,
        "region_id": 2,
        "uz": "Xonabod tumani",
        "ru": "город Ханабад"
    },
    {
        "id": 45,
        "region_id": 2,
        "uz": "Xo‘jaobod tumani",
        "ru": "Ходжаабадский район"
    },
    {
        "id": 46,
        "region_id": 2,
        "uz": "Shahrixon tumani",
        "ru": "Шахриханский район"
    },
    {
        "id": 47,
        "region_id": 3,
        "uz": "Buxoro shahri",
        "ru": "город Бухара"
    },
    {
        "id": 48,
        "region_id": 3,
        "uz": "Buxoro tumani",
        "ru": "Бухарский район"
    },
    {
        "id": 49,
        "region_id": 3,
        "uz": "Vobkent tumani",
        "ru": "Вабкентский район"
    },
    {
        "id": 50,
        "region_id": 3,
        "uz": "G‘ijduvon tumani",
        "ru": "Гиждуванский район"
    },
    {
        "id": 51,
        "region_id": 3,
        "uz": "Jondor tumani",
        "ru": "Жондорский район"
    },
    {
        "id": 52,
        "region_id": 3,
        "uz": "Kogon tumani",
        "ru": "Каганский район"
    },
    {
        "id": 53,
        "region_id": 3,
        "uz": "Kogon shahri",
        "ru": "город Каган"
    },
    {
        "id": 54,
        "region_id": 3,
        "uz": "Qorako‘l tumani",
        "ru": "Каракульский район"
    },
    {
        "id": 55,
        "region_id": 3,
        "uz": "Qorovulbozor tumani",
        "ru": "Караулбазарский район"
    },
    {
        "id": 56,
        "region_id": 3,
        "uz": "Olot tumani",
        "ru": "Алатский район"
    },
    {
        "id": 57,
        "region_id": 3,
        "uz": "Peshku tumani",
        "ru": "Пешкунский район"
    },
    {
        "id": 58,
        "region_id": 3,
        "uz": "Romitan tumani",
        "ru": "Ромитанский район"
    },
    {
        "id": 59,
        "region_id": 3,
        "uz": "Shofirkon tumani",
        "ru": "Шафирканский район"
    },
    {
        "id": 60,
        "region_id": 4,
        "uz": "Arnasoy tumani",
        "ru": "Арнасайский район"
    },
    {
        "id": 61,
        "region_id": 4,
        "uz": "Baxmal tumani",
        "ru": "Бахмальский район"
    },
    {
        "id": 62,
        "region_id": 4,
        "uz": "G‘allaorol tumani",
        "ru": "Галляаральский район"
    },
    {
        "id": 63,
        "region_id": 4,
        "uz": "Do‘stlik tumani",
        "ru": "Дустликский район"
    },
    {
        "id": 64,
        "region_id": 4,
        "uz": "Sh.Rashidov tumani",
        "ru": "Шараф-Рашидовский район"
    },
    {
        "id": 65,
        "region_id": 4,
        "uz": "Jizzax shahri",
        "ru": "город Джизак"
    },
    {
        "id": 66,
        "region_id": 4,
        "uz": "Zarbdor tumani",
        "ru": "Зарбдарский район"
    },
    {
        "id": 67,
        "region_id": 4,
        "uz": "Zafarobod tumani",
        "ru": "Зафарабадский район"
    },
    {
        "id": 68,
        "region_id": 4,
        "uz": "Zomin tumani",
        "ru": "Зааминский район"
    },
    {
        "id": 69,
        "region_id": 4,
        "uz": "Mirzacho‘l tumani",
        "ru": "Мирзачульский район"
    },
    {
        "id": 70,
        "region_id": 4,
        "uz": "Paxtakor tumani",
        "ru": "Пахтакорский район"
    },
    {
        "id": 71,
        "region_id": 4,
        "uz": "Forish tumani",
        "ru": "Фаришский район"
    },
    {
        "id": 72,
        "region_id": 4,
        "uz": "Yangiobod tumani",
        "ru": "Янгиабадский район"
    },
    {
        "id": 73,
        "region_id": 5,
        "uz": "G‘uzor tumani",
        "ru": "Гузарский район"
    },
    {
        "id": 74,
        "region_id": 5,
        "uz": "Dehqonobod tumani",
        "ru": "Дехканабадский район"
    },
    {
        "id": 75,
        "region_id": 5,
        "uz": "Qamashi tumani",
        "ru": "Камашинский район"
    },
    {
        "id": 76,
        "region_id": 5,
        "uz": "Qarshi tumani",
        "ru": "Каршинский район"
    },
    {
        "id": 77,
        "region_id": 5,
        "uz": "Qarshi shahri",
        "ru": "город Карши"
    },
    {
        "id": 78,
        "region_id": 5,
        "uz": "Kasbi tumani",
        "ru": "Касбийский район"
    },
    {
        "id": 79,
        "region_id": 5,
        "uz": "Kitob tumani",
        "ru": "Китабский район"
    },
    {
        "id": 80,
        "region_id": 5,
        "uz": "Koson tumani",
        "ru": "Касанский район"
    },
    {
        "id": 81,
        "region_id": 5,
        "uz": "Mirishkor tumani",
        "ru": "Миришкорский район"
    },
    {
        "id": 82,
        "region_id": 5,
        "uz": "Muborak tumani",
        "ru": "Мубарекский район"
    },
    {
        "id": 83,
        "region_id": 5,
        "uz": "Nishon tumani",
        "ru": "Нишанский район"
    },
    {
        "id": 84,
        "region_id": 5,
        "uz": "Chiroqchi tumani",
        "ru": "Чиракчинский район"
    },
    {
        "id": 85,
        "region_id": 5,
        "uz": "Shahrisabz tumani",
        "ru": "Шахрисабзский район"
    },
    {
        "id": 86,
        "region_id": 5,
        "uz": "Yakkabog‘ tumani",
        "ru": "Яккабагский район"
    },
    {
        "id": 87,
        "region_id": 6,
        "uz": "Zarafshon shahri",
        "ru": "город Зарафшан"
    },
    {
        "id": 88,
        "region_id": 6,
        "uz": "Karmana tumani",
        "ru": "Карманинский район"
    },
    {
        "id": 89,
        "region_id": 6,
        "uz": "Qiziltepa tumani",
        "ru": "Кызылтепинский район"
    },
    {
        "id": 90,
        "region_id": 6,
        "uz": "Konimex tumani",
        "ru": "Канимехский район"
    },
    {
        "id": 91,
        "region_id": 6,
        "uz": "Navbahor tumani",
        "ru": "Навбахорский район"
    },
    {
        "id": 92,
        "region_id": 6,
        "uz": "Navoiy shahri",
        "ru": "город Навои"
    },
    {
        "id": 93,
        "region_id": 6,
        "uz": "Nurota tumani",
        "ru": "Нуратинский район"
    },
    {
        "id": 94,
        "region_id": 6,
        "uz": "Tomdi tumani",
        "ru": "Тамдынский район"
    },
    {
        "id": 95,
        "region_id": 6,
        "uz": "Uchquduq tumani",
        "ru": "Учкудукский район"
    },
    {
        "id": 96,
        "region_id": 6,
        "uz": "Xatirchi tumani",
        "ru": "Хатырчинский район"
    },
    {
        "id": 97,
        "region_id": 7,
        "uz": "Kosonsoy tumani",
        "ru": "Касансайский район"
    },
    {
        "id": 98,
        "region_id": 7,
        "uz": "Mingbuloq tumani",
        "ru": "Мингбулакский район"
    },
    {
        "id": 99,
        "region_id": 7,
        "uz": "Namangan tumani",
        "ru": "Наманганский район"
    },
    {
        "id": 100,
        "region_id": 7,
        "uz": "Namangan shahri",
        "ru": "город Наманган"
    },
    {
        "id": 101,
        "region_id": 7,
        "uz": "Norin tumani",
        "ru": "Нарынский район"
    },
    {
        "id": 102,
        "region_id": 7,
        "uz": "Pop tumani",
        "ru": "Папский район"
    },
    {
        "id": 103,
        "region_id": 7,
        "uz": "To‘raqo‘rg‘on tumani",
        "ru": "Туракурганский район"
    },
    {
        "id": 104,
        "region_id": 7,
        "uz": "Uychi tumani",
        "ru": "Уйчинский район"
    },
    {
        "id": 105,
        "region_id": 7,
        "uz": "Uchqo‘rg‘on tumani",
        "ru": "Учкурганский район"
    },
    {
        "id": 106,
        "region_id": 7,
        "uz": "Chortoq tumani",
        "ru": "Чартакский район"
    },
    {
        "id": 107,
        "region_id": 7,
        "uz": "Chust tumani",
        "ru": "Чустский район"
    },
    {
        "id": 108,
        "region_id": 7,
        "uz": "Yangiqo‘rg‘on tumani",
        "ru": "Янгикурганский район"
    },
    {
        "id": 109,
        "region_id": 8,
        "uz": "Bulung‘ur tumani",
        "ru": "Булунгурский район"
    },
    {
        "id": 110,
        "region_id": 8,
        "uz": "Jomboy tumani",
        "ru": "Джамбайский район"
    },
    {
        "id": 111,
        "region_id": 8,
        "uz": "Ishtixon tumani",
        "ru": "Иштыханский район"
    },
    {
        "id": 112,
        "region_id": 8,
        "uz": "Kattaqo‘rg‘on tumani",
        "ru": "Каттакурганский район"
    },
    {
        "id": 113,
        "region_id": 8,
        "uz": "Kattaqo‘rg‘on shahri",
        "ru": "город Каттакурган"
    },
    {
        "id": 114,
        "region_id": 8,
        "uz": "Qo‘shrabot tumani",
        "ru": "Кошрабадский район"
    },
    {
        "id": 115,
        "region_id": 8,
        "uz": "Narpay tumani",
        "ru": "Нарпайский район"
    },
    {
        "id": 116,
        "region_id": 8,
        "uz": "Nurabod tumani",
        "ru": "Нурабадский район"
    },
    {
        "id": 117,
        "region_id": 8,
        "uz": "Oqdaryo tumani",
        "ru": "Акдарьинский район"
    },
    {
        "id": 118,
        "region_id": 8,
        "uz": "Payariq tumani",
        "ru": "Пайарыкский район"
    },
    {
        "id": 119,
        "region_id": 8,
        "uz": "Pastarg‘om tumani",
        "ru": "Пастдаргомский район"
    },
    {
        "id": 120,
        "region_id": 8,
        "uz": "Paxtachi tumani",
        "ru": "Пахтачийский район"
    },
    {
        "id": 121,
        "region_id": 8,
        "uz": "Samarqand tumani",
        "ru": "Самаркандский район"
    },
    {
        "id": 122,
        "region_id": 8,
        "uz": "Samarqand shahri",
        "ru": "город Самарканд"
    },
    {
        "id": 123,
        "region_id": 8,
        "uz": "Toyloq tumani",
        "ru": "Тайлакский район"
    },
    {
        "id": 124,
        "region_id": 8,
        "uz": "Urgut tumani",
        "ru": "Ургутский район"
    },
    {
        "id": 125,
        "region_id": 9,
        "uz": "Angor tumani",
        "ru": "Ангорский район"
    },
    {
        "id": 126,
        "region_id": 9,
        "uz": "Boysun tumani",
        "ru": "Байсунский район"
    },
    {
        "id": 127,
        "region_id": 9,
        "uz": "Denov tumani",
        "ru": "Денауский район"
    },
    {
        "id": 128,
        "region_id": 9,
        "uz": "Jarqo‘rg‘on tumani",
        "ru": "Джаркурганский район"
    },
    {
        "id": 129,
        "region_id": 9,
        "uz": "Qiziriq tumani",
        "ru": "Кизирикский район"
    },
    {
        "id": 130,
        "region_id": 9,
        "uz": "Qo‘mqo‘rg‘on tumani",
        "ru": "Кумкурганский район"
    },
    {
        "id": 131,
        "region_id": 9,
        "uz": "Muzrabot tumani",
        "ru": "Музрабадский район"
    },
    {
        "id": 132,
        "region_id": 9,
        "uz": "Oltinsoy tumani",
        "ru": "Алтынсайский район"
    },
    {
        "id": 133,
        "region_id": 9,
        "uz": "Sariosiyo tumani",
        "ru": "Сариасийский район"
    },
    {
        "id": 134,
        "region_id": 9,
        "uz": "Termiz tumani",
        "ru": "Термезский район"
    },
    {
        "id": 135,
        "region_id": 9,
        "uz": "Termiz shahri",
        "ru": "город Термез"
    },
    {
        "id": 136,
        "region_id": 9,
        "uz": "Uzun tumani",
        "ru": "Узунский район"
    },
    {
        "id": 137,
        "region_id": 9,
        "uz": "Sherobod tumani",
        "ru": "Шерабадский район"
    },
    {
        "id": 138,
        "region_id": 9,
        "uz": "Sho‘rchi tumani",
        "ru": "Шурчинский район"
    },
    {
        "id": 139,
        "region_id": 10,
        "uz": "Boyovut tumani",
        "ru": "Баяутский район"
    },
    {
        "id": 140,
        "region_id": 10,
        "uz": "Guliston tumani",
        "ru": "Гулистанский район"
    },
    {
        "id": 141,
        "region_id": 10,
        "uz": "Guliston shahri",
        "ru": "город Гулистан"
    },
    {
        "id": 142,
        "region_id": 10,
        "uz": "Mirzaobod tumani",
        "ru": "Мирзаабадский район"
    },
    {
        "id": 143,
        "region_id": 10,
        "uz": "Oqoltin tumani",
        "ru": "Акалтынский район"
    },
    {
        "id": 144,
        "region_id": 10,
        "uz": "Sayxunobod tumani",
        "ru": "Сайхунабадский район"
    },
    {
        "id": 145,
        "region_id": 10,
        "uz": "Sardoba tumani",
        "ru": "Сардобский район"
    },
    {
        "id": 146,
        "region_id": 10,
        "uz": "Sirdaryo tumani",
        "ru": "Сырдарьинский район"
    },
    {
        "id": 147,
        "region_id": 10,
        "uz": "Xavos tumani",
        "ru": "Хавастский район"
    },
    {
        "id": 148,
        "region_id": 10,
        "uz": "Shirin shahri",
        "ru": "город Ширин"
    },
    {
        "id": 149,
        "region_id": 10,
        "uz": "Yangiyer shahri",
        "ru": "город Янгиер"
    },
    {
        "id": 150,
        "region_id": 11,
        "uz": "Angiren shahri",
        "ru": "город Ангрен"
    },
    {
        "id": 151,
        "region_id": 11,
        "uz": "Bekabod tumani",
        "ru": "Бекабадский район"
    },
    {
        "id": 152,
        "region_id": 11,
        "uz": "Bekabod shahri",
        "ru": "город Бекабад"
    },
    {
        "id": 153,
        "region_id": 11,
        "uz": "Bo‘ka tumani",
        "ru": "Букинский район"
    },
    {
        "id": 154,
        "region_id": 11,
        "uz": "Bo‘stonliq tumani",
        "ru": "Бостанлыкский район"
    },
    {
        "id": 155,
        "region_id": 11,
        "uz": "Zangiota tumani",
        "ru": "Зангиатинский район"
    },
    {
        "id": 156,
        "region_id": 11,
        "uz": "Qibray tumani",
        "ru": "Кибрайский район"
    },
    {
        "id": 157,
        "region_id": 11,
        "uz": "Quyichirchiq tumani",
        "ru": "Куйичирчикский район"
    },
    {
        "id": 158,
        "region_id": 11,
        "uz": "Oqqo‘rg‘on tumani",
        "ru": "Аккурганский район"
    },
    {
        "id": 159,
        "region_id": 11,
        "uz": "Olmaliq shahri",
        "ru": "город Алмалык"
    },
    {
        "id": 160,
        "region_id": 11,
        "uz": "Ohangaron tumani",
        "ru": "Ахангаранский район"
    },
    {
        "id": 161,
        "region_id": 11,
        "uz": "Parkent tumani",
        "ru": "Паркентский район"
    },
    {
        "id": 162,
        "region_id": 11,
        "uz": "Piskent tumani",
        "ru": "Пскентский район"
    },
    {
        "id": 163,
        "region_id": 11,
        "uz": "O‘rtachirchiq tumani",
        "ru": "Уртачирчикский район"
    },
    {
        "id": 164,
        "region_id": 11,
        "uz": "Chinoz tumani",
        "ru": "Чиназский район"
    },
    {
        "id": 165,
        "region_id": 11,
        "uz": "Chirchiq shahri",
        "ru": "город Чирчик"
    },
    {
        "id": 166,
        "region_id": 11,
        "uz": "Yuqorichirchiq tumani",
        "ru": "Юкоричирчикский район"
    },
    {
        "id": 167,
        "region_id": 11,
        "uz": "Yangiyo‘l tumani",
        "ru": "Янгиюльский район"
    },
    {
        "id": 168,
        "region_id": 12,
        "uz": "Beshariq tumani",
        "ru": "Бешарыкский район"
    },
    {
        "id": 169,
        "region_id": 12,
        "uz": "Bog‘dod tumani",
        "ru": "Багдадский район"
    },
    {
        "id": 170,
        "region_id": 12,
        "uz": "Buvayda tumani",
        "ru": "Бувайдинский район"
    },
    {
        "id": 171,
        "region_id": 12,
        "uz": "Dang‘ara tumani",
        "ru": "Дангаринский район"
    },
    {
        "id": 172,
        "region_id": 12,
        "uz": "Yozyovon tumani",
        "ru": "Язъяванский район"
    },
    {
        "id": 173,
        "region_id": 12,
        "uz": "Quva tumani",
        "ru": "Кувинский район"
    },
    {
        "id": 174,
        "region_id": 12,
        "uz": "Quvasoy shahri",
        "ru": "город Кувасай"
    },
    {
        "id": 175,
        "region_id": 12,
        "uz": "Qo‘qon shahri",
        "ru": "город Коканд"
    },
    {
        "id": 176,
        "region_id": 12,
        "uz": "Qo‘shtepa tumani",
        "ru": "Куштепинский район"
    },
    {
        "id": 177,
        "region_id": 12,
        "uz": "Marg‘ilon shahri",
        "ru": "город Маргилан"
    },
    {
        "id": 178,
        "region_id": 12,
        "uz": "Oltiariq tumani",
        "ru": "Алтыарыкский район"
    },
    {
        "id": 179,
        "region_id": 12,
        "uz": "Rishton tumani",
        "ru": "Риштанский район"
    },
    {
        "id": 180,
        "region_id": 12,
        "uz": "So‘x tumani",
        "ru": "Сохский район"
    },
    {
        "id": 181,
        "region_id": 12,
        "uz": "Toshloq tumani",
        "ru": "Ташлакский район"
    },
    {
        "id": 182,
        "region_id": 12,
        "uz": "Uchko‘prik tumani",
        "ru": "Учкуприкский район"
    },
    {
        "id": 183,
        "region_id": 12,
        "uz": "O‘zbekiston tumani",
        "ru": "Узбекистанский район"
    },
    {
        "id": 184,
        "region_id": 12,
        "uz": "Farg‘ona tumani",
        "ru": "Ферганский район"
    },
    {
        "id": 185,
        "region_id": 12,
        "uz": "Farg‘ona shahri",
        "ru": "город Фергана"
    },
    {
        "id": 186,
        "region_id": 12,
        "uz": "Furqat tumani",
        "ru": "Фуркатский район"
    },
    {
        "id": 187,
        "region_id": 13,
        "uz": "Bog‘ot tumani",
        "ru": "Багатский район"
    },
    {
        "id": 188,
        "region_id": 13,
        "uz": "Gurlan tumani",
        "ru": "Гурленский район"
    },
    {
        "id": 189,
        "region_id": 13,
        "uz": "Qo‘shko‘pir tumani",
        "ru": "Кошкупырский район"
    },
    {
        "id": 190,
        "region_id": 13,
        "uz": "Urganch tumani",
        "ru": "Ургенчский район"
    },
    {
        "id": 191,
        "region_id": 13,
        "uz": "Urganch shahri",
        "ru": "город Ургенч"
    },
    {
        "id": 192,
        "region_id": 13,
        "uz": "Xiva tumani",
        "ru": "Хивинский район"
    },
    {
        "id": 193,
        "region_id": 13,
        "uz": "Xazarasp tumani",
        "ru": "Хазараспский район"
    },
    {
        "id": 194,
        "region_id": 13,
        "uz": "Xonqa tumani",
        "ru": "Ханкинский район"
    },
    {
        "id": 195,
        "region_id": 13,
        "uz": "Shavot tumani",
        "ru": "Шаватский район"
    },
    {
        "id": 196,
        "region_id": 13,
        "uz": "Yangiariq tumani",
        "ru": "Янгиарыкский район"
    },
    {
        "id": 197,
        "region_id": 13,
        "uz": "Yangibozor tumani",
        "ru": "Янгибазарский район"
    },
    {
        "id": 198,
        "region_id": 14,
        "uz": "Bektimer tumani",
        "ru": "Бектемирский район"
    },
    {
        "id": 199,
        "region_id": 14,
        "uz": "Mirzo Ulug'bek tumani",
        "ru": "Мирзо-Улугбекский район"
    },
    {
        "id": 200,
        "region_id": 14,
        "uz": "Mirobod tumani",
        "ru": "Мирабадский район"
    },
    {
        "id": 201,
        "region_id": 14,
        "uz": "Olmazor tumani",
        "ru": "Алмазарский район"
    },
    {
        "id": 202,
        "region_id": 14,
        "uz": "Sirg'ali tumani",
        "ru": "Сергелийский район"
    },
    {
        "id": 203,
        "region_id": 14,
        "uz": "Uchtepa tumani",
        "ru": "Учтепинский район"
    },
    {
        "id": 204,
        "region_id": 14,
        "uz": "Yashnobod tumani",
        "ru": "Яшнободский район"
    },
    {
        "id": 205,
        "region_id": 14,
        "uz": "Chilonzor tumani",
        "ru": "Чиланзарский район"
    },
    {
        "id": 206,
        "region_id": 14,
        "uz": "Shayxontohur tumani",
        "ru": "Шайхантахурский район"
    },
    {
        "id": 207,
        "region_id": 14,
        "uz": "Yunusobod tumani",
        "ru": "Юнусабадский район"
    },
    {
        "id": 208,
        "region_id": 14,
        "uz": "Yakkasaroy tumani",
        "ru": "Яккасарайский район"
    },
    {
        "id": 209,
        "region_id": 1,
        "uz": "Taxiatosh shahri",
        "ru": "Тахиаташский район"
    },
    {
        "id": 210,
        "region_id": 2,
        "uz": "Asaka shahri",
        "ru": "Асакинский район"
    },
    {
        "id": 211,
        "region_id": 9,
        "uz": "Bandixon tumani",
        "ru": "Бандиханский район"
    },
    {
        "id": 212,
        "region_id": 11,
        "uz": "Ohangaron shahri",
        "ru": "город Ахангаранский"
    },
    {
        "id": 213,
        "region_id": 11,
        "uz": "Yangiyo‘l shahri",
        "ru": "город Янгиюль"
    },
    {
        "id": 215,
        "region_id": 11,
        "uz": "Toshkent tumani",
        "ru": "Ташкентский район"
    },
    {
        "id": 216,
        "region_id": 13,
        "uz": "Xiva shahri",
        "ru": "город Хива"
    },
    {
        "id": 217,
        "region_id": 13,
        "uz": "Do'stlik shahri",
        "ru": "город Дўстлик\r\nДўстлик"
    },
    {
        "id": 218,
        "region_id": 14,
        "uz": "Yangihayot tumani",
        "ru": "Янгихаётский район"
    },
    {
        "id": 219,
        "region_id": 13,
        "uz": "Tuproqqala tumani",
        "ru": "Тироккальский район"
    },
    {
        "id": 220,
        "region_id": 7,
        "uz": "Davlatobod tumani",
        "ru": "Давлатабадский район \r\n"
    },
    {
        "id": 221,
        "region_id": 6,
        "uz": "G‘ozg‘on shahri",
        "ru": "Город Гозган"
    },
    {
        "id": 222,
        "region_id": 1,
        "uz": "Bo‘zatov tumani",
        "ru": "Бозатовский район"
    },
    {
        "id": 224,
        "region_id": 5,
        "uz": "Shahrisabz shahri",
        "ru": "Город Шахрисабз"
    },
    {
        "id": 225,
        "region_id": 5,
        "uz": "Ko‘kdala tumani",
        "ru": "Кукдалинский район"
    }
]

const regions = {
    1: [], 2: [], 3: [], 4: [], 5: [], 6: [],
    7: [], 8: [], 9: [], 10: [], 11: [], 12: [],
    13: [], 14: []
}

districts.forEach(item => {
    const { id, ru, uz } = item
    regions[item.region_id].push({
        id, ru, uz
    })
})

const fs = require('fs')

fs.writeFile('./regions.json', JSON.stringify(regions), (err) => {
    if (err) {
        console.log(err)
    }
})