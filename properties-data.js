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
        title: "Таунхаусы в Бишкеке",
        location: "Вторая линия от Жибек-Жолу, рядом с церковью",
        shortDesc:
          "Новые таунхаусы, 230 м², газовое отопление, центральные коммуникации.",
        price: "660 000 $ (возможна продажа отдельно)"
      },

      ky: { title: "", location: "", shortDesc: "", price: "" },
      en: { title: "", location: "", shortDesc: "", price: "" }
    },

    contacts: [
      { name: "Нургуль", phone: "0559500551" },
      { name: "Нагима",  phone: "0706315903" }
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

];

/* ============================================================
   🔐 NOTA IMPORTANTE
   ------------------------------------------------------------
   - NO modificar esta estructura
   - Agregar propiedades SOLO como nuevos objetos
   - El diseño HTML NO depende de este archivo directamente
   ============================================================ */
