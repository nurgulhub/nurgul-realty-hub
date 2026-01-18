/* ============================================================
   🏠 NURGUL REALTY — PROPERTIES RENDER ENGINE
   ------------------------------------------------------------
   - Clona la tarjeta plantilla
   - Inserta datos desde properties-data.js
   - Respeta idioma actual (localStorage: nurgul_lang)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= SAFETY CHECK ================= */
  if (!window.PROPERTIES || !Array.isArray(PROPERTIES)) {
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

  /* ================= LANG HELPERS ================= */
  function getCurrentLang(){
    return (
      localStorage.getItem("nurgul_lang") ||
      document.documentElement.lang ||
      "ky"
    );
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

  function statusLabel(property){
    const lang = getCurrentLang();
    const map = {
      ky: { available: "Сатууда", sold: "Сатылды" },
      ru: { available: "В продаже", sold: "Продано" },
      en: { available: "On sale", sold: "Sold" }
    };
    const key = property.status === "sold" ? "sold" : "available";
    return (map[lang] && map[lang][key]) ? map[lang][key] : key;
  }

  /* ============================================================
     🔹 RENDER PROPERTIES (solo SALE)
     ============================================================ */
  PROPERTIES.forEach(property => {
    if (property.type !== "sale") return;

    const t = pickTexts(property);
    if (!t) return;

    const card = template.cloneNode(true);
    card.classList.remove("property-template");
    card.style.display = "";
    card.dataset.propertyId = property.id;

    // ===== TEXTOS =====
    card.querySelector("[data-prop-title]").textContent = t.title || "";
    card.querySelector("[data-prop-location]").textContent = t.location || "";
    card.querySelector("[data-prop-desc]").textContent = t.shortDesc || "";
    card.querySelector("[data-prop-price]").textContent = t.price || "";

    // ===== CAMPOS NUEVOS (labels ya están en data-i18n) =====
    const addrEl = card.querySelector("[data-prop-address]");
    if (addrEl) addrEl.textContent = t.location || "";

    const stEl = card.querySelector("[data-prop-status]");
    if (stEl) stEl.textContent = statusLabel(property);

    const dateEl = card.querySelector("[data-prop-date]");
    if (dateEl) dateEl.textContent = property.published || "—";

    // ===== IMAGEN =====
    const img = card.querySelector("[data-prop-img]");
    if (img) {
      img.src = `images/${property.imagesFolder}/house1.jpg`;
      img.alt = t.title || "";
    }

    // ===== WHATSAPP =====
    const wa = card.querySelector("[data-prop-whatsapp]");
    const contact = property.contacts?.[0];
    if (wa && contact?.phone) {
      wa.href = `https://wa.me/${String(contact.phone).replace(/\D/g, "")}`;
      // opcional: texto botón si lo necesitas dinámico, pero ya lo tienes fijo “WhatsApp”
    }

    // ===== ESTADO VISUAL =====
    if (property.status === "sold") card.classList.add("property-sold");

    grid.appendChild(card);
  });

  /* ============================================================
     🟧 2.3 — PROPERTY CARD ACTIONS
     ============================================================ */
  grid.addEventListener("click", e => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;

    const card = btn.closest("[data-property-id]");
    if (!card) return;

    const propertyId = card.dataset.propertyId;
    const property = PROPERTIES.find(p => p.id === propertyId);
    if (!property) return;

    const t = pickTexts(property);
    if (!t) return;

    if (btn.dataset.action === "info") {
      if (!t.fullInfo) return;

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
   🟧 2.4.2 — PROPERTY INFO MODAL ENGINE
   ============================================================ */

window.openPropertyInfo = function(title, text, contacts = []) {
  const modal = document.getElementById("propertyInfoModal");
  if (!modal) return;

  const titleEl    = modal.querySelector("[data-info-title]");
  const textEl     = modal.querySelector("[data-info-text]");
  const contactsEl = modal.querySelector("[data-info-contacts]");

  if (titleEl) titleEl.textContent = title || "";
  if (textEl)  textEl.textContent  = text || "";

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
