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
}

      ky: {
        title: "",
        location: "",
        shortDesc: "",
        price: ""
      },

      en: {
        title: "",
        location: "",
        shortDesc: "",
        price: ""
      }
    },

    contacts: [
      { name: "Нургуль", phone: "0559500551" },
      { name: "Нагима", phone: "0706315903" }
    ]
  }
];

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
