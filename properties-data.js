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
      /* ============================================================
   🟧 2.2 — SALE1 (RU) — ADD fullInfo (LONG TEXT)
   Location: properties-data.js → window.PROPERTIES[0] → texts.ru
   ACTION: REEMPLAZA ESTE BLOQUE COMPLETO (ru: { ... })
   ============================================================ */
ru: {
  title: "Таунхаусы в Бишкеке",
  location: "Вторая линия от Жибек-Жолу, рядом с церковью",
  shortDesc: "Новые таунхаусы, 230 м², газовое отопление, центральные коммуникации.",
  price: "660 000 $ (возможна продажа отдельно)",

  fullInfo: `🏡 Продаются новые таунхаусы в Бишкеке
📍 Отличный район, вторая улица от Жибек-Жолу, недалеко от церкви

✨ Характеристики:
▫️ Каждый дом — 230 м², абсолютно новый
▫️ Построены для себя, на две семьи
▫️ Отопление — газовое
▫️ Все коммуникации — центральные
▫️ Можно купить два вместе — 660 000 $ или по отдельности
▫️ Документы в порядке

💰 Отличный вариант для жизни большой семьёй или инвестиций

📞 Звоните / пишите:
0559 500 551 — Нургуль
0706 315 903 — Нагима

#таунхаусБишкек #новыйдом #недвижимостьБишкек #инвестиции #жилойкомплекс #Бишкек`
},


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
