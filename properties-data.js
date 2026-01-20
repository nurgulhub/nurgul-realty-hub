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

    imagesFolder: "house1",

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
