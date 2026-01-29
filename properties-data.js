/* ============================================================
   🏠 NURGUL REALTY — PROPERTIES DATA
   ------------------------------------------------------------
   Purpose:
   - Centralizar TODAS las propiedades en un solo lugar
   - Separar diseño (HTML) de contenido (datos)
   - Facilitar agregar / vender propiedades sin rehacer la web
   ------------------------------------------------------------
   Types:
     project → proyectos (Royal)
     sale    → casas / apartamentos en venta
   Status:
     available → en venta
     sold      → vendido (ПРОДАНО)
   ============================================================ */

/* ============================================================
   🏠 NURGUL REALTY — PROPERTIES DATA
   ============================================================ */

window.PROPERTIES = [
  {
    id: "house1",
    type: "sale",
    status: "available",
    priority: "normal",
    imagesFolder: "house1",
    dateAdded: "18.01.2026",
    
    texts: {
      ru: {
        title: "Продаются новые таунхаусы в Бишкеке",
        location: "Вторая линия от Жибек-Жолу, рядом с церковью",
        address: "Вторая линия от Жибек-Жолу, рядом с церковью",
        shortDesc: "Новые таунхаусы, 230 м², газовое отопление, центральные коммуникации.",
        price: "660 000 $ (возможна продажа отдельно)",
        fullInfo: `🏡 Продаются новые таунхаусы в Бишкеке
📍 Вторая линия от Жибек-Жолу, рядом с церковью

✨ Характеристики:
▫️ Каждый дом — 230 м², новый
▫️ Газовое отопление
▫️ Центральные коммуникации
▫️ Возможна покупка вместе или по отдельности

📞 Контакты:
0559 500 551 — Нургуль
0706 315 903 — Нагима`
      },

      ky: {
        title: "Бишкекте жаңы таунхаустар сатылат",
        location: "Жибек-Жолу көчөсүнөн экинчи катар, чиркөөнүн жанында",
        address: "Жибек-Жолу көчөсүнөн экинчи катар, чиркөөнүн жанында",
        shortDesc: "Жаңы таунхаустар, 230 м², газ менен жылытуу, борбордук коммуникациялар.",
        price: "660 000 $ (өзүнчө сатууга мүмкүн)",
        fullInfo: `🏡 Бишкекте жаңы таунхаустар сатылат
📍 Жибек-Жолу көчөсүнөн экинчи катар, чиркөөнүн жанында

✨ Мүнөздөмөлөрү:
▫️ Ар бир үй — 230 м², жаңы
▫️ Газ менен жылытуу
▫️ Бардык коммуникациялар — борбордук
▫️ Экөөнү чогуу же өзүнчө сатып алса болот

📞 Байланыш:
0559 500 551 — Нургуль
0706 315 903 — Нагима`
      },

      en: {
        title: "New townhouses for sale in Bishkek",
        location: "Second line from Zhibek-Zholu, near the church",
        address: "Second line from Zhibek-Zholu, near the church",
        shortDesc: "New townhouses, 230 m², gas heating, central utilities.",
        price: "$660,000 (possible individual sale)",
        fullInfo: `🏡 New townhouses for sale in Bishkek
📍 Second line from Zhibek-Zholu, near the church

✨ Highlights:
▫️ Each unit — 230 m², brand new
▫️ Gas heating
▫️ Central utilities
▫️ Can be purchased together or individually

📞 Contact:
0559 500 551 — Nurgul
0706 315 903 — Nagima`
      }
    },

   contacts: [
      { name: "Нургуль", phone: "0559500551" },
      { name: "Нагима", phone: "0706315903" }
    ]
  },

 /* ============================================================
   🟧 BLOQUE 1 — HOUSE3 VENTA APARTAMENTO CENTRO (83 m² ELITE)
   ============================================================ */

{
  id: "house3",
  type: "sale",
  status: "available",
  priority: "normal",
  imagesFolder: "house3",

  texts: {
    ru: {
      title: "2-комнатная квартира в центре Бишкека",
      location: "Рядом с парком Панфилова",
      address: "Центр города, рядом с парком Панфилова",
      shortDesc: "83 м², элитка, евроремонт, 10 этаж, продаётся с мебелью.",
      price: "155 000 $",
      fullInfo: `✨ 83 м² комфорта и продуманной планировки
▫️ 10 этаж из 13
▫️ Кирпичный дом, 2016 г.
▫️ Класс: элитка
▫️ Качественный евроремонт
▫️ Центральное отопление
▫️ Кухня 17 м² с обеденной зоной у панорамного окна
▫️ Изолированные комнаты
▫️ Просторная прихожая со встроенным шкафом-купе
▫️ Санузлы раздельные
▫️ Квартира продаётся с мебелью

🍽 Кухня полностью укомплектована:
угловой гарнитур, газовая варочная панель, духовой шкаф, вытяжка, встроенный холодильник и микроволновая печь — всё удобно и функционально

🌳 Локация:
в шаговой доступности парк Панфилова, Дубовый парк, рестораны, магазины, банки, поликлиника

📄 Документы: техпаспорт  
👤 Собственник  

💰 Цена: 155 000 $  
🤝 Торг уместен  

📞 Звоните / пишите:  
0559 500 551 — Нургуль  
0706 315 903 — Нагима`
    },

    ky: {
      title: "Бишкек борборунда 2 бөлмөлүү батир",
      location: "Панфилов паркынын жанында",
      address: "Шаардын борбору, Панфилов паркынын жанында",
      shortDesc: "83 м², элитка, евро ремонт, 10-кабат, эмерек менен сатылат.",
      price: "155 000 $",
      fullInfo: `✨ Ыңгайлуу жана ойлонулган 83 м² батир
▫️ 13 кабаттуу үйдүн 10-кабаты
▫️ Кыштан салынган үй, 2016-жыл
▫️ Классы: элитка
▫️ Сапаттуу евро ремонт
▫️ Борбордук жылытуу
▫️ Панорамалык терезеси бар 17 м² ашкана
▫️ Бөлмөлөр өз-өзүнчө
▫️ Кең кире бериш, шкаф-купе бар
▫️ Даараткана өз-өзүнчө
▫️ Батир эмерек менен сатылат

🍽 Ашкана толук жабдылган:
газ плитасы, духовка, вытяжка, муздаткыч жана микротолкундуу меш

🌳 Жайгашкан жери:
Панфилов паркы, Дубовый парк, дүкөндөр, ресторандар жакын

📄 Документтер: техпаспорт  
👤 Ээси өзү  

💰 Баасы: 155 000 $  
🤝 Соодалашууга болот  

📞 Байланыш:  
0559 500 551 — Нургуль  
0706 315 903 — Нагима`
    },

    en: {
      title: "2-bedroom apartment in Bishkek city center",
      location: "Near Panfilov Park",
      address: "City center, near Panfilov Park",
      shortDesc: "83 m², elite class, renovated, 10th floor, sold with furniture.",
      price: "$155,000",
      fullInfo: `✨ 83 m² of comfort with a smart layout
▫️ 10th floor out of 13
▫️ Brick building, 2016
▫️ Class: elite
▫️ High-quality renovation
▫️ Central heating
▫️ 17 m² kitchen with dining area and panoramic window
▫️ Isolated rooms
▫️ Spacious hallway with built-in wardrobe
▫️ Separate bathrooms
▫️ Apartment sold fully furnished

🍽 Fully equipped kitchen:
gas cooktop, oven, hood, built-in refrigerator and microwave

🌳 Location:
walking distance to Panfilov Park, Dubovy Park, restaurants, shops, banks, clinic

📄 Documents: technical passport  
👤 Private owner  

💰 Price: $155,000  
🤝 Negotiable  

📞 Contact:  
0559 500 551 — Nurgul  
0706 315 903 — Nagima`
    }
  },

  contacts: [
    { name: "Нургуль", phone: "0559500551" },
    { name: "Нагима",  phone: "0706315903" }
  ]
},   // ✅ AQUÍ QUITÉ LA LLAVE EXTRA Y DEJÉ SOLO LA COMA CORRECTA

{
  id: "house4",
  type: "sale",
  status: "available",
  priority: "normal",
  imagesFolder: "house4",

  contacts: [
    { name: "Нургуль", phone: "0559 500 551" },
    { name: "Нагима", phone: "0706 315 903" }
  ],

  texts: {

    ru: {
      title: "Дом в Бишкеке (район КНУ)",
      location: "г. Бишкек.",
      address: "г. Бишкек, район КНУ",
      shortDesc: "Кирпичный дом 80 м² с участком 4,5 сотки, полностью меблирован.",
      price: "190 000 $ (торг)",

      fullInfo:
`Продаётся добротный дом в Бишкеке (район КНУ)

Характеристики:
- Кирпичный дом, 1990 г.
- Общая площадь — 80 м²
- Участок — 4,5 сотки
- 1 этаж
- Высота потолков — 3 м
- Евроремонт
- Дом полностью меблирован — заезжай и живи

Планировка:
3 спальни, зал, кухня, совмещённый санузел

Коммуникации:
- Газовое отопление (магистральный газ)
- Центральная канализация
- Центральное водоснабжение
- Электричество, 3 фазы
- Интернет — оптика

Дополнительно:
баня, сад, хозпостройки, навес, гараж, летняя терраса / веранда,
видеонаблюдение, решётки на окнах

Документы:
договор купли-продажи, техпаспорт, красная книга

Цена: 190 000 $
Реальному покупателю — торг`
    },

    ky: {
      title: "Бишкекте үй (КНУ району)",
      location: "Бишкек",
      address: "Бишкек ш., КНУ району",
      shortDesc: "80 м² кирпич үй, 4,5 сотых жер, толугу менен эмерек менен.",
      price: "190 000 $ (соодалашууга болот)",

      fullInfo:
`Бишкек шаарында сатылат (КНУ району)

Мүнөздөмөлөрү:
- Кирпич үй, 1990-ж.
- Жалпы аянты — 80 м²
- Участок — 4,5 сотых
- 1 кабат
- Потолок бийиктиги — 3 м
- Евроремонт
- Толук эмерек менен — кирип жашай берсе болот

Планировка:
3 уктоочу бөлмө, зал, ашкана, бириккен санузел

Коммуникациялар:
- Газ менен жылытуу
- Борбордук канализация
- Борбордук суу
- Электр энергиясы (3 фаза)
- Интернет — оптика

Кошумча:
мончо, бакча, чарба курулуштары, навес, гараж, жайкы терраса,
видеокөзөмөл, терезелерде решётка

Документтер:
сатып алуу келишими, техпаспорт, кызыл китеп

Баасы: 190 000 $
Сатып алуучу менен соодалашууга болот`
    },

    en: {
      title: "House in Bishkek (KNU area)",
      location: "Bishkek",
      address: "Bishkek, KNU district",
      shortDesc: "Brick house 80 m² with 4.5 sotka land, fully furnished.",
      price: "190,000 USD (negotiable)",

      fullInfo:
`Solid house for sale in Bishkek (KNU area)

Main features:
- Brick house, built in 1990
- Total area — 80 m²
- Land plot — 4.5 sotka
- 1 floor
- Ceiling height — 3 m
- Renovated (euro renovation)
- Fully furnished — move in and live

Layout:
3 bedrooms, living room, kitchen, combined bathroom

Communications:
- Gas heating (main gas)
- Central sewage
- Central water supply
- Electricity (3 phases)
- Fiber optic internet

Additional:
bathhouse, garden, storage buildings, canopy, garage, summer terrace,
video surveillance, window grills

Documents:
sale contract, technical passport, red book

Price: 190,000 USD
Negotiable for real buyer`
    }

  }
},

{
  id: "buran",
  type: "sale",
  status: "available",
  imagesFolder: "buran",

  contacts: [
    { name: "Нургуль", phone: "0559 500 551" }
  ],

  texts: {

    ru: {
      title: "Бизнес-центр класса A+",
      address: "г. Бишкек, ул. Жумабека 117 (за цирком)",
      shortDesc: "Премиальный бизнес-центр A+ с готовыми офисами и парковкой.",
      price: "от 3200 $ / м²",

      fullInfo:
`Бизнес-центр класса A+ в Бишкеке

Современный бизнес-центр, созданный по международным стандартам комфорта и безопасности.

Характеристики:
- 64 офисных пространства
- 65 парковочных мест
- Ввод в эксплуатацию — июль следующего года
- Каждый офис с готовым ремонтом и премиальной мебелью
- Система рекуперации воздуха (очистка и обновление воздуха)

Преимущества:
- Архитектура современного уровня
- Высокое качество строительства
- Заходите и начинайте работать с первого дня
- Без дополнительных вложений и ремонта

Адрес:
г. Бишкек, ул. Жумабека 117 (за цирком)

Цена:
от 3200 $ за м²`
    },

    ky: {
      title: "A+ класстагы бизнес-борбор",
      address: "Бишкек ш., Жумабека көч. 117 (цирктин артында)",
      shortDesc: "Даяр кеңселер жана унаа токтотуучу жайы бар премиум бизнес-борбор.",
      price: "3200 $ / м² баштап",

      fullInfo:
`Бишкек шаарындагы A+ класстагы бизнес-борбор

Эл аралык стандарттарга ылайык курулган заманбап бизнес-борбор.

Мүнөздөмөлөрү:
- 64 кеңсе бөлмө
- 65 унаа токтотуучу орун
- Колдонууга берүү — кийинки жылдын июль айы
- Ар бир кеңсе даяр ремонт жана премиум эмерек менен
- Аба рекуперация системасы орнотулган

Артыкчылыктары:
- Заманбап архитектура
- Жогорку сапаттагы курулуш
- Дароо иш баштоого даяр
- Кошумча чыгымдар жок

Дарек:
Бишкек ш., Жумабека көч. 117 (цирктин артында)

Баасы:
3200 $ / м² баштап`
    },

    en: {
      title: "A+ Class Business Center",
      address: "Bishkek, Zhumabek Street 117 (behind the circus)",
      shortDesc: "Premium A+ class business center with ready-to-use offices.",
      price: "from 3,200 USD / m²",

      fullInfo:
`A+ Class Business Center in Bishkek

A modern business center built according to international comfort and safety standards.

Key features:
- 64 office spaces
- 65 parking spaces
- Commissioning: July next year
- Each office fully renovated and furnished with premium furniture
- Air recuperation system for continuous fresh air circulation

Advantages:
- Contemporary architecture
- High-quality construction
- Ready to start working from day one
- No additional renovation or investment required

Address:
Bishkek, Zhumabek Street 117 (behind the circus)

Price:
from 3,200 USD per m²`
    }

  }
},

{
  id: "house5",
  type: "sale",
  status: "available",
  priority: "high",
  imagesFolder: "house5",

  contacts: [
    { name: "Нургуль", phone: "0559500551" },
    { name: "Нагима", phone: "0706315903" }
  ],

  texts: {

    ru: {
      title: "3-комнатная квартира в центре (Золотой квадрат)",
      location: "Панфилова / Боконбаева",
      address: "г. Бишкек, Панфилова / Боконбаева",
      shortDesc: "96 м², 3 комнаты, 9 этаж, дом 2020 года, срочная продажа.",
      price: "210 000 $",

      fullInfo:
`🔥 СРОЧНАЯ ПРОДАЖА В ЦЕНТРЕ | ЗОЛОТОЙ КВАДРАТ 🔥

Продаётся 3-комнатная квартира 96 м²  
📍 Панфилова / Боконбаева  
🏢 Застройщик Памир, дом 2020 года  

Характеристики:
- Этаж 9 из 12  
- Площадь — 96 м²  
- Все коммуникации центральные  
- Окна на север и запад  
- Раздельный санузел  
- Кухня совмещена с балконом  
- Квартира с мебелью — можно заехать и жить  

Документы:
техпаспорт, договор купли-продажи  

Локация — ЗОЛОТОЙ КВАДРАТ  
В шаговой доступности:
— школы и детские сады  
— магазины и сервисы  
— бульвар Эркиндик  
— ЖД вокзал  
— удобная транспортная развязка  

⚠️ Срочная продажа  
Деньги нужны на операцию в Турции — цена ниже рынка  

💰 Цена: 210 000 $  

📞 Контакты:  
0559 500 551 — Нургуль  
0706 315 903 — Нагима`
    },

    ky: {
      title: "Бишкек борборунда 3 бөлмөлүү батир (Алтын квадрат)",
      location: "Панфилов / Боконбаев",
      address: "Бишкек ш., Панфилов / Боконбаев",
      shortDesc: "96 м², 3 бөлмө, 9-кабат, 2020-жылкы үй, шашылыш сатуу.",
      price: "210 000 $",

      fullInfo:
`🔥 БОРБОРДО ШАШЫЛЫШ САТУУ | АЛТЫН КВАДРАТ 🔥

Бишкек шаарында 3 бөлмөлүү батир сатылат  
📍 Панфилов / Боконбаев  
🏢 Памир курулуш компаниясы, 2020-жыл  

Мүнөздөмөлөрү:
- 12 кабаттын 9-кабаты  
- Аянты — 96 м²  
- Бардык коммуникациялар борбордук  
- Терезелер түндүк жана батыш тарапка карайт  
- Даараткана өз-өзүнчө  
- Ашкана балкон менен бириккен  
- Эмерек менен — кирип жашай берсе болот  

Документтер:
техпаспорт, сатып алуу келишими  

Жайгашкан жери — АЛТЫН КВАДРАТ  
Жакын жерде:
— мектептер, бала бакчалар  
— дүкөндөр, кызматтар  
— Эркиндик бульвары  
— темир жол вокзалы  
— ыңгайлуу транспорт  

⚠️ Шашылыш сатуу  
Түркияда операция үчүн акча керек — баа рыноктон төмөн  

💰 Баасы: 210 000 $  

📞 Байланыш:  
0559 500 551 — Нургуль  
0706 315 903 — Нагима`
    },

    en: {
      title: "3-bedroom apartment in city center (Golden Square)",
      location: "Panfilov / Bokonbaev",
      address: "Bishkek, Panfilov / Bokonbaev",
      shortDesc: "96 m², 3 rooms, 9th floor, building 2020, urgent sale.",
      price: "210,000 USD",

      fullInfo:
`🔥 URGENT SALE IN CITY CENTER | GOLDEN SQUARE 🔥

3-bedroom apartment for sale — 96 m²  
📍 Panfilov / Bokonbaev  
🏢 Developer: Pamir, building 2020  

Main features:
- 9th floor out of 12  
- Total area — 96 m²  
- All central communications  
- Windows facing north and west  
- Separate bathroom  
- Kitchen combined with balcony  
- Fully furnished — ready to move in  

Documents:
technical passport, sale contract  

Location — GOLDEN SQUARE  
Walking distance to:
— schools and kindergartens  
— shops and services  
— Erkindik boulevard  
— railway station  
— convenient transport access  

⚠️ Urgent sale  
Money needed for surgery in Turkey — price below market  

💰 Price: 210,000 USD  

📞 Contact:  
0559 500 551 — Nurgul  
0706 315 903 — Nagima`
    }

  }
},

{
  id: "house6",
  type: "sale",
  status: "available",
  priority: "normal",          // luego puedes subir a medium o high

  imagesFolder: "house6",

  texts: {

    ru: {
      title: "1-комнатная квартира в ЖК IHLAS-Джал",
      location: "15-й микрорайон (Джал)",
      address: "Бишкек, 15-й микрорайон (Джал)",
      shortDesc: "Новая квартира 41,48 м², элитка, с ремонтом, готова к заселению.",
      price: "71 000 $",

      fullInfo:
`🏡 Продается 1-комнатная квартира в ЖК IHLAS-Джал
✨ Новая | С ремонтом | Готова к заселению

📍 15-й микрорайон (Джал)

Характеристики:
▫️ Площадь: 41,48 м²
▫️ Этаж: 3 из 14
▫️ Серия: элитка
▫️ Год постройки: 2025
▫️ Окна: западная сторона 🌇
▫️ Балкон есть
▫️ Санузел: совмещённый
▫️ Отопление: газовое
▫️ Документы: ДДУ

✅ Абсолютно новая квартира  
✅ Качественный ремонт  
✅ Встроенная кухня — заезжай и живи  

🏙 Инфраструктура:
школы, детские сады, ВУЗы, спорткомплексы, супермаркеты, больницы — всё рядом  

💰 Цена: 71 000 $  

📞 Контакты:
0706 31 59 03  
0559 50 05 51`
    },

    ky: {
      title: "IHLAS-Джал ЖКда 1 бөлмөлүү батир",
      location: "15-микрорайон (Джал)",
      address: "Бишкек, 15-микрорайон (Джал)",
      shortDesc: "41,48 м² жаңы батир, элитка, ремонт менен, кирип жашоого даяр.",
      price: "71 000 $",

      fullInfo:
`🏡 IHLAS-Джал ЖКда 1 бөлмөлүү батир сатылат
✨ Жаңы | Ремонт менен | Кирип жашоого даяр

📍 15-микрорайон (Джал)

Мүнөздөмөлөрү:
▫️ Аянты: 41,48 м²
▫️ Кабат: 3 / 14
▫️ Сериясы: элитка
▫️ Курулган жылы: 2025
▫️ Терезелер: батыш тарабы 🌇
▫️ Балкон бар
▫️ Санузел: бириккен
▫️ Жылытуу: газ менен
▫️ Документтер: ДДУ

✅ Толук жаңы батир  
✅ Сапаттуу ремонт  
✅ Ашкана орнотулган — кирип жашай берсе болот  

🏙 Инфраструктура:
мектептер, бакчалар, университеттер, спорт, дүкөндөр, ооруканалар жакын  

💰 Баасы: 71 000 $  

📞 Байланыш:
0706 31 59 03  
0559 50 05 51`
    },

    en: {
      title: "1-bedroom apartment in IHLAS-Dzhal complex",
      location: "15th microdistrict (Dzhal)",
      address: "Bishkek, 15th microdistrict (Dzhal)",
      shortDesc: "New 41.48 m² apartment, elite class, renovated, ready to move in.",
      price: "$71,000",

      fullInfo:
`🏡 1-bedroom apartment for sale in IHLAS-Dzhal complex
✨ New | Renovated | Ready to move in

📍 15th microdistrict (Dzhal)

Main features:
▫️ Area: 41.48 m²
▫️ Floor: 3 out of 14
▫️ Class: elite
▫️ Year built: 2025
▫️ Windows: west side 🌇
▫️ Balcony available
▫️ Bathroom: combined
▫️ Heating: gas
▫️ Documents: DDU

✅ Brand new apartment  
✅ High-quality renovation  
✅ Built-in kitchen — move in and live  

🏙 Infrastructure:
schools, kindergartens, universities, sports centers, supermarkets, hospitals nearby  

💰 Price: $71,000  

📞 Contacts:
0706 31 59 03  
0559 50 05 51`
    }

  },

  contacts: [
    { name: "Нургуль", phone: "0559500551" },
    { name: "Нагима",  phone: "0706315903" }
  ]
},

{
  id: "house7",
  type: "sale",
  status: "available",
  priority: "high",
  imagesFolder: "house7",

  contacts: [
    { name: "Нургуль", phone: "0559 500 551" },
    { name: "Нагима", phone: "0706 315 903" }
  ],

  texts: {

    ru: {
      title: "1-комнатная квартира (Пишпек)",
      address: "г. Бишкек, ул. Термечикова / Льва Толстого",
      shortDesc: "Новая элитная квартира 43,5 м² с ремонтом и мебелью. Вид на Royal Central Park.",
      price: "66 000 $",

      fullInfo:
`Продаётся 1-комнатная квартира, элитка

Адрес:
г. Бишкек, район Пишпек  
ул. Термечикова / Льва Толстого  

Характеристики:
- Площадь — 43,5 м²  
- Этаж — 5 из 9  
- Год постройки — 2025  
- Окна на юг, вид на Royal Central Park  
- Балкон утеплённый, отдельный  
- Санузел совмещённый  

Состояние:
- Квартира абсолютно новая  
- Никто не проживал  
- Качественный ремонт  
- Полностью меблирована  
- Газовое отопление  
- Все коммуникации центральные  

Документы:
ДДУ (через Госрегистр)  

Цена: 66 000 $  

Контакты:
0706 31 59 03  
0559 50 05 51`
    },

    ky: {
      title: "1 бөлмөлүү батир (Пишпек району)",
      address: "Бишкек ш., Термечикова / Льва Толстого",
      shortDesc: "Жаңы элиталык батир 43,5 м², ремонт жана эмерек менен. Royal Central Park көрүнүшү.",
      price: "66 000 $",

      fullInfo:
`Пишпек районунда 1 бөлмөлүү батир сатылат (элитка)

Дарек:
Бишкек ш., Термечикова / Льва Толстого  

Мүнөздөмөлөрү:
- Аянты — 43,5 м²  
- Кабат — 5 / 9  
- Курулган жылы — 2025  
- Терезелер түштүк тарапка, Royal Central Park көрүнүшү  
- Балкон өзүнчө, жылууланган  
- Санузел бириккен  

Абалы:
- Батир таптакыр жаңы  
- Эч ким жашаган эмес  
- Сапаттуу ремонт  
- Толук эмерек менен  
- Газ менен жылытуу  
- Бардык коммуникациялар борбордук  

Документтер:
ДДУ (Госрегистр аркылуу)  

Баасы: 66 000 $  

Байланыш:
0706 31 59 03  
0559 50 05 51`
    },

    en: {
      title: "1-bedroom apartment (Pishpek area)",
      address: "Bishkek, Termechikova / Lev Tolstoy Street",
      shortDesc: "New elite 43.5 m² apartment with renovation and furniture. View of Royal Central Park.",
      price: "66,000 USD",

      fullInfo:
`1-bedroom apartment for sale (elite class)

Address:
Bishkek, Pishpek district  
Termechikova / Lev Tolstoy Street  

Main features:
- Area — 43.5 m²  
- Floor — 5 of 9  
- Year built — 2025  
- South-facing windows, view of Royal Central Park  
- Insulated separate balcony  
- Combined bathroom  

Condition:
- Brand new apartment  
- Never lived in  
- High-quality renovation  
- Fully furnished  
- Gas heating  
- All central communications  

Documents:
Equity participation agreement (via State Register)  

Price: 66,000 USD  

Contacts:
+996 706 31 59 03  
+996 559 50 05 51`
    }

  }
},

/* ============================================================
   🟧 HOUSE 8 — PREMIUM 2 ROOMS · ROYAL CENTRAL PARK VIEW
   ============================================================ */

{
  id: "house8",
  type: "sale",
  status: "available",
  priority: "high",
  imagesFolder: "house8",

  contacts: [
    { name: "Нургуль", phone: "0559500551" },
    { name: "Нагима",  phone: "0771630051" }
  ],

  texts: {

    ru: {
      title: "Премиальная 2-комнатная квартира с видом на Royal Central Park",
      location: "Термечикова / Льва Толстого",
      address: "г. Бишкек, Термечикова / Льва Толстого",
      shortDesc: "Элитная квартира 67 м² с панорамным видом на Royal Central Park.",
      price: "110 000 $ (торг уместен)",

      fullInfo:
`💎 Премиальная 2-комнатная квартира с видом на Royal Central Park
Застройщик: ОсОО Ньюс (класс Элитка)

✨ Основные характеристики:
- Площадь: 67 м²
- Этаж: 9 из 9
- Панорамные окна на юг — вид на Royal Central Park
- Высота потолков: 2,8 м
- 2 кондиционера
- Утеплённый балкон
- Раздельный санузел

🔥 Газовое отопление — комфорт и экономия круглый год

Интерьер:
- Современный дизайн
- Тёплые полы (прихожая, ванная, санузел)
- Встроенная мебель и техника (газ-плита, вытяжка)

Инфраструктура:
школы, детские сады, магазины, транспорт — всё рядом

📄 Документы:
ДДУ через Госрегистр (юридически чисто)

💰 Цена: 110 000 $
🤝 Торг уместен`
    },

    ky: {
      title: "Royal Central Park көрүнүшү бар премиум 2 бөлмөлүү батир",
      location: "Термечикова / Льва Толстой",
      address: "Бишкек ш., Термечикова / Льва Толстой",
      shortDesc: "67 м² элит батир, Royal Central Park көрүнүшү менен.",
      price: "110 000 $ (соодалашууга болот)",

      fullInfo:
`💎 Royal Central Park көрүнүшү бар премиум батир

Негизги мүнөздөмөлөрү:
- Аянты: 67 м²
- Кабат: 9 / 9
- Түштүк тараптагы панорамалык терезелер
- Потолок бийиктиги: 2,8 м
- 2 кондиционер
- Утеплённый балкон
- Санузел өз-өзүнчө

🔥 Газ менен жылытуу — үнөмдүү жана ыңгайлуу

Интерьер:
- Заманбап дизайн
- Жылуу полдор
- Камтылган эмерек жана техника

Документтер:
ДДУ, Госрегистр аркылуу

💰 Баасы: 110 000 $
🤝 Соодалашууга болот`
    },

    en: {
      title: "Premium 2-bedroom apartment with Royal Central Park view",
      location: "Termechikova / Lev Tolstoy",
      address: "Bishkek, Termechikova / Lev Tolstoy",
      shortDesc: "Elite 67 m² apartment with panoramic south view to Royal Central Park.",
      price: "110,000 USD (negotiable)",

      fullInfo:
`💎 Premium 2-bedroom apartment with Royal Central Park view

Main features:
- Area: 67 m²
- Floor: 9 of 9
- South panoramic windows with park view
- Ceiling height: 2.8 m
- 2 air conditioners
- Insulated balcony
- Separate bathroom

🔥 Gas heating — comfort and efficiency all year round

Interior:
- Modern design
- Heated floors
- Built-in furniture and appliances

Documents:
DDU via State Register (legally clean)

💰 Price: 110,000 USD
🤝 Negotiable`
    }

  }
},

/* ============================================================
   🟧 HOUSE 9 — HOUSE + SEWING WORKSHOP · TURNKEY BUSINESS
   ============================================================ */

{
  id: "house9",
  type: "sale",
  status: "available",
  priority: "high",
  imagesFolder: "house9",

  contacts: [
    { name: "Нургуль", phone: "0559500551" },
    { name: "Нагима",  phone: "0771630051" }
  ],

  texts: {

    ru: {
      title: "Дом со швейным цехом в Ак-Босого — готовый бизнес под ключ",
      location: "Ак-Босого",
      address: "г. Бишкек, район Ак-Босого",
      shortDesc: "Дом 107 м² + тёплый швейный цех 100 м² на участке 6 соток. Заезжай и начинай зарабатывать с первого дня.",
      price: "Цена: договорная",

      fullInfo:
`🏡🏭 Продается дом со швейным цехом в Ак-Босого — готовый бизнес под ключ

📍 Район: Ак-Босого
📐 Участок: 6 соток
🏠 Дом: 107 м²
🏭 Швейный цех: 100 м²

Идеальный вариант для тех, кто хочет сразу начать бизнес без дополнительных вложений.

📑 Документы: Красная книга, техпаспорт

В доме есть всё для комфортного проживания:
— Видеонаблюдение
— Кухонный гарнитур
— Холодильник, микроволновка
— Шкаф
— Сейф
— Душ и туалет в доме
— Есть уличный туалет
— Отопление: электрическое и твердотопливное

🏭 Швейный цех (тёплый, с отоплением):
— Столы для кроя: 10,5 м × 2,10 м
— 15 швейных машин
— Станок для петель
— Станок для пуговиц
— 3 станка для наклеек
— Станки для кроя (ножи), электрические ножницы
— 1 «Найман»
— 2 контейнера для хранения материалов

⚡ Дополнительно:
— Солнечная батарея 5 кВт
— 2 счётчика по 5 кВт

Готовое производство + жильё в одном месте — редкое и выгодное предложение!

💰 Цена: договорная

📞 Контакты:
0771 63 00 51
0559 50 05 51

Заезжай и начинай зарабатывать с первого дня!`
    },

    ky: {
      title: "Ак-Босогодо тигүү цехи бар үй — даяр бизнес (под ключ)",
      location: "Ак-Босого",
      address: "Бишкек ш., Ак-Босого району",
      shortDesc: "107 м² үй + 100 м² жылуу тигүү цехи, участок 6 соток. Кошумча салымсыз эле кирип иштей берсе болот.",
      price: "Баасы: келишим боюнча",

      fullInfo:
`🏡🏭 Ак-Босогодо тигүү цехи бар үй — даяр бизнес (под ключ)

📍 Район: Ак-Босого
📐 Участок: 6 соток
🏠 Үй: 107 м²
🏭 Тигүү цехи: 100 м²

Кошумча салымсыз эле бизнес баштагысы келгендер үчүн идеалдуу вариант.

📑 Документтер: кызыл китеп, техпаспорт

Үйдө жашоого керектүү шарттар:
— Видеокөзөмөл
— Ашкана гарнитуру
— Муздаткыч, микротолкундуу меш
— Шкаф
— Сейф
— Үйдүн ичинде душ жана туалет
— Сырттагы туалет да бар
— Жылытуу: электр жана катуу отун

🏭 Тигүү цехи (жылуу, жылытуу бар):
— Кесүү үстөлдөрү: 10,5 м × 2,10 м
— 15 тигүү машинасы
— Иймек (петля) станогу
— Түймө станогу
— 3 наклейка станогу
— Кесүү жабдуулары (бычак), электр кайчы
— 1 «Найман»
— Материал сактоочу 2 контейнер

⚡ Кошумча:
— 5 кВт күн батареясы
— 5 кВттан 2 эсептегич

Бир жерде — жашоо + өндүрүш. Сейрек жана пайдалуу сунуш!

💰 Баасы: келишим боюнча

📞 Байланыш:
0771 63 00 51
0559 50 05 51

Кирип эле биринчи күндөн баштап иштеп баштаңыз!`
    },

    en: {
      title: "House with sewing workshop in Ak-Bosogo — turnkey business",
      location: "Ak-Bosogo",
      address: "Bishkek, Ak-Bosogo area",
      shortDesc: "107 m² house + 100 m² heated sewing workshop on 6 ares. Fully equipped — start operating from day one.",
      price: "Price: on request",

      fullInfo:
`🏡🏭 House with sewing workshop in Ak-Bosogo — turnkey business

📍 Area: Ak-Bosogo (Bishkek)
📐 Land: 6 ares
🏠 House: 107 m²
🏭 Sewing workshop: 100 m²

A perfect option for those who want to start a business immediately with no extra investment.

📑 Documents: Red Book, technical passport

House features:
— Video surveillance
— Kitchen furniture
— Fridge, microwave
— Wardrobe
— Safe
— Shower and toilet inside the house
— Outdoor toilet
— Heating: electric + solid-fuel

🏭 Sewing workshop (heated):
— Cutting tables: 10.5 m × 2.10 m
— 15 sewing machines
— Buttonhole machine
— Button machine
— 3 sticker/label machines
— Cutting tools (knives), electric scissors
— 1 “Naiman”
— 2 storage containers for materials

⚡ Additional:
— 5 kW solar panel system
— Two 5 kW meters

Production + living in one place — a rare and strong offer.

💰 Price: on request

📞 Contacts:
0771 63 00 51
0559 50 05 51

Move in and start earning from day one!`
    }

  }
},
   
];   // ✅ AQUÍ Y SOLO AQUÍ SE CIERRA window.PROPERTIES
   
 /* ============================================================
   🔜 HOUSE 2–7
   ------------------------------------------------------------
   Copiar este bloque y cambiar:
   - id
   - imagesFolder
   - textos
   - estado
   ============================================================ */

/* ============================================================
   🔐 NOTA IMPORTANTE
   ------------------------------------------------------------
   - NO modificar esta estructura
   - Agregar propiedades SOLO como nuevos objetos
   - El diseño HTML NO depende de este archivo directamente
   ============================================================ */
