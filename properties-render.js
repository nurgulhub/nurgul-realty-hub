/* ============================================================
   🏠 NURGUL REALTY — PROPERTIES RENDER ENGINE (FIX FINAL)
   ------------------------------------------------------------
   - Respeta idioma dinámico (window.NURGUL_LANG)
   - Re-render al cambiar idioma
   - NO borra la tarjeta Royal fija
   - Llena Address / Status / Details / Price / Published
   - Botón Information abre el modal genérico total
   ============================================================ */

/* ============================================================
   🌐 GLOBAL LANGUAGE STATE (NURGUL)
   ============================================================ */

window.NURGUL_LANG = localStorage.getItem("nurgul_lang") || "en";

document.addEventListener("DOMContentLoaded", () => {

  if (!window.PROPERTIES || !Array.isArray(window.PROPERTIES)) {
    console.warn("PROPERTIES not found or invalid");
    return;
  }

  const grid = document.querySelector(".properties-grid");
  const template = grid?.querySelector(".property-template");

  if (!grid || !template) {
    console.warn("Property template not found");
    return;
  }

  template.style.display = "none";

  /* ================= LANG ================= */

  function getCurrentLang(){
    return window.NURGUL_LANG || "en";
  }

  function pickTexts(property){
    const lang = getCurrentLang();
    return (
      property.texts?.[lang] ||
      property.texts?.ru ||
      property.texts?.en ||
      property.texts?.ky ||
      null
    );
  }

  function getStatusLabel(property){
    const lang = getCurrentLang();
    const map = {
      ky: { available:"Сатууда", sold:"Сатылды" },
      ru: { available:"В продаже", sold:"Продано" },
      en: { available:"On sale", sold:"Sold" }
    };
    const key = (property.status === "sold") ? "sold" : "available";
    return map[lang]?.[key] || map.en[key];
  }

function getPriorityLabel(property){
  const lang = window.NURGUL_LANG || "en";
  const p = property.priority || "normal";

  const map = {
    en: {
      normal: "✅ Priority: Normal",
      medium: "⚠️ Priority: Medium",
      high:   "🔥 Priority: High"
    },
    ru: {
      normal: "✅ Приоритет: Обычный",
      medium: "⚠️ Приоритет: Средний",
      high:   "🔥 Приоритет: Срочно"
    },
    ky: {
      normal: "✅ Мааниси: Нормалдуу",
      medium: "⚠️ Мааниси: Орточо",
      high:   "🔥 Мааниси: Шашылыш"
    }
  };

  return map[lang]?.[p] || map.en[p];
}
   
  /* ================= RENDER FUNCTION (GLOBAL) ================= */

  window.renderProperties = function renderProperties() {

    // 🔥 LIMPIAR SOLO TARJETAS DINÁMICAS
    // ❌ NO toca Royal fija (no tiene data-property-id)
    grid.querySelectorAll('.property-card[data-property-id]:not(.property-template)')
        .forEach(card => card.remove());

    window.PROPERTIES.forEach(property => {

      // permitir placeholders
      if (!property.placeholder && property.type !== "sale") return;

      // no exigir textos a placeholders
      const t = property.placeholder ? null : pickTexts(property);
      if (!property.placeholder && !t) return;

      const card = template.cloneNode(true);
      card.classList.remove("property-template");
      card.style.display = "";
      card.dataset.propertyId = property.id;

      // 🔴 PLACEHOLDER CARD (SOLO LOGO)
      if (property.placeholder) {
        card.innerHTML = `
          <div class="property-placeholder">
            <img src="logo/nurgul-realty-hub-header.png" alt="Nurgul Realty">
          </div>
        `;
        grid.appendChild(card);
        return;
      }

      // Título
      const title = (t.title && t.title.trim()) ? t.title : "Royal";
      card.querySelector("[data-prop-title]").textContent = title;

      // Location (línea suelta)
      card.querySelector("[data-prop-location]").textContent = "";

      // Address
      const addrEl = card.querySelector("[data-prop-address]");
      if (addrEl) addrEl.textContent = t.address || t.location || "";

      // Status
      const stEl = card.querySelector("[data-prop-status]");
      if (stEl) stEl.textContent = getStatusLabel(property);

      // Details
      card.querySelector("[data-prop-desc]").textContent = t.shortDesc || "";

      // Price
      card.querySelector("[data-prop-price]").textContent = t.price || "";
       
     // Priority
     const prEl = card.querySelector("[data-prop-priority]");
     if (prEl) prEl.textContent = getPriorityLabel(property);
       
      // Image (portada por carpeta)
      const img = card.querySelector("[data-prop-img]");
      if (img) {

        let cover = "house1.jpg";

        if (property.imagesFolder === "house3") {
          cover = "apt1.jpg";
        }

        // HOUSE 4 usa house21.jpg como portada
        if (property.imagesFolder === "house4") {
        cover = "house21.jpg";
        }

        // BURAN usa buran1.jpg como portada
        if (property.imagesFolder === "buran") {
        cover = "buran1.jpg";
        img.classList.add("buran-cover");   // 👈 ESTA LÍNEA NUEVA
        }

         // HOUSE 5 usa apt51.jpg como portada
        if (property.imagesFolder === "house5") {
        cover = "apt51.jpg";
        }

        // HOUSE 6 usa apt61.jpg como portada
        if (property.imagesFolder === "house6") {
        cover = "apt61.jpg";
        }

        // 🔹 HOUSE 7
        if (property.imagesFolder === "house7") {
        cover = "apt71.jpg";
        }

        // 🔹 HOUSE 8
        if (property.imagesFolder === "house8") {
        cover = "apt85.jpg";
        }

        // 🔹 HOUSE 9
        if (property.imagesFolder === "house9") {
        cover = "house91.jpg";
        }
         
        img.src = `images/${property.imagesFolder}/${cover}`;
        img.alt = title;
      }


      // ================= WHATSAPP AUTO MESSAGE (PER CARD + MULTI LANGUAGE) =================

const wa = card.querySelector("[data-prop-whatsapp]");
if (wa) {

  const lang = window.NURGUL_LANG || "ky";

  const title   = t.title || "";
  const address = t.address || t.location || "";
  const price   = t.price || "";

  let message = "";

  // 🇷🇺 RUSO
  if (lang === "ru") {
    message =
`Здравствуйте!
Меня интересует этот объект:

🏡 ${title}
📍 ${address}
💰 ${price}

Пожалуйста, отправьте больше информации. Спасибо!`;
  }

  // 🇬🇧 INGLÉS
  else if (lang === "en") {
    message =
`Hello!
I am interested in this property:

🏡 ${title}
📍 ${address}
💰 ${price}

Could you please send me more information? Thank you!`;
  }

  // 🇰🇬 KIRGUÍС
  else {
    message =
`Саламатсызбы!
Бул объект мага кызык болуп жатат:

🏡 ${title}
📍 ${address}
💰 ${price}

Кошумча маалымат берсеңиз, рахмат!`;
  }

  const encodedMessage = encodeURIComponent(message);

  // 🔒 LINK ÚNICO PARA ESTA TARJETA
  wa.href = `https://wa.me/996559500551?text=${encodedMessage}`;
}


      if (property.status === "sold") card.classList.add("property-sold");

      grid.appendChild(card);
    });
  };

  // 🔥 Render inicial
  window.renderProperties();

  /* ================= ACTIONS ================= */

  grid.addEventListener("click", e => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;

    const card = btn.closest("[data-property-id]");
    if (!card) return;

    const propertyId = card.dataset.propertyId;
    const property = window.PROPERTIES.find(p => p.id === propertyId);
    if (!property) return;

    const lang =
      window.NURGUL_LANG ||
      document.documentElement.lang ||
      "ru";

    const t = property.texts?.[lang];
    if (!t) return;

    if (btn.dataset.action === "info") {
      window.openPropertyInfo(
        t.title,
        t.fullInfo,
        property.contacts || []
      );
    }

    if (btn.dataset.action === "details") {
      if (typeof window.openPropertyGallery === "function") {
        window.openPropertyGallery(property);
      }
    }
  });

});

/* ============================================================
   🟧 PROPERTY INFO MODAL ENGINE (MATCHES HTML)
   ============================================================ */

window.openPropertyInfo = function(title, text, contacts = []) {
  const modal = document.getElementById("propertyInfoModal");
  if (!modal) return;

  const titleEl = modal.querySelector("[data-info-title]");
  const textEl = modal.querySelector("[data-info-text]");
  const contactsEl = modal.querySelector("[data-info-contacts]");

  if (titleEl) titleEl.textContent = title || "";
  if (textEl) textEl.textContent = text || "";

  if (contactsEl) {
    contactsEl.innerHTML = "";
    contacts.forEach(c => {
      const p = document.createElement("p");
      p.textContent = `${c.name}: ${c.phone}`;
      contactsEl.appendChild(p);
    });
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

/* ============================================================
   🔄 MANUAL REFRESH (SI SE NECESITA DESDE OTRO SCRIPT)
   ============================================================ */

window.NURGUL_refreshProperties = function () {
  if (typeof window.renderProperties === "function") {
    window.renderProperties();
  }
};
