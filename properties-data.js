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
      price: "155 000 $ (торг уместен)",
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
      price: "155 000 $ (соодалашууга болот)",
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
      price: "$155,000 (negotiable)",
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
},





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
