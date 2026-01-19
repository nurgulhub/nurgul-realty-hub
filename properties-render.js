/* ============================================================
   🏠 NURGUL REALTY — PROPERTIES RENDER ENGINE (FIX)
   ------------------------------------------------------------
   - Respeta idioma (localStorage: nurgul_lang)
   - Llena Address / Status / Details / Price / Published
   - Botón Information abre el modal genérico total
   ============================================================ */

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
    return localStorage.getItem("nurgul_lang") || "en";
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
   
/* ================= RENDER ================= */
   
window.PROPERTIES.forEach(property => {

  // ⬅️ AJUSTE: permitir placeholders
  if (!property.placeholder && property.type !== "sale") return;

  // ⬅️ AJUSTE: no exigir textos a placeholders
  const t = property.placeholder ? null : pickTexts(property);
  if (!property.placeholder && !t) return;

  const card = template.cloneNode(true);
  card.classList.remove("property-template");
  card.style.display = "";
  card.dataset.propertyId = property.id;

  // 🔴 PLACEHOLDER CARD (SOLO LOGO) — AJUSTE
  if (property.placeholder) {
    card.innerHTML = `
      <div class="property-placeholder">
        <img src="logo/nurgul-realty-hub-header.png" alt="Nurgul Realty">
      </div>
    `;
    grid.appendChild(card);
    return;
  }

  // Título “tipo Royal” -> SIEMPRE visible
  const title = (t.title && t.title.trim()) ? t.title : "Royal";
  card.querySelector("[data-prop-title]").textContent = title;

  // Location (línea suelta)
  card.querySelector("[data-prop-location]").textContent = "";

  // Address (label + value)
  const addrEl = card.querySelector("[data-prop-address]");
  if (addrEl) addrEl.textContent = t.address || t.location || "";

    // Status
    const stEl = card.querySelector("[data-prop-status]");
    if (stEl) stEl.textContent = getStatusLabel(property);

   /* ============================================================
   🟧 PRICE — MULTIIDIOMA DIRECTO DESDE DATA (CANÓNICO)
   ============================================================ */

const priceEl = card.querySelector("[data-prop-price]");
if (priceEl) {
  priceEl.textContent = t.price || "";
}

    /* ============================================================
   🟧 FIX — PRICE + NEGOTIABLE MULTIIDIOMA (NO ROMPE NADA)
   ============================================================ */

const priceEl = card.querySelector("[data-prop-price]");

if (priceEl) {
  const basePrice = t.price || "";

  const lang = localStorage.getItem("nurgul_lang") || "ky";
  const negotiableText = translations[lang]?.prop_negotiable || "";

  if (p.status === "available") {
    priceEl.textContent = `${basePrice} ${negotiableText}`;
  } else {
    priceEl.textContent = basePrice;
  }
}


    // Published
    const pubEl = card.querySelector("[data-prop-date]");
    if (pubEl) pubEl.textContent = property.published || "—";

  // Image (usa portada correcta por propiedad)
const img = card.querySelector("[data-prop-img]");
if (img) {

  // portada por defecto según carpeta
  let cover = "house1.jpg";

  // HOUSE 3 usa apt1.jpg como portada
  if (property.imagesFolder === "house3") {
    cover = "apt1.jpg";
  }

  img.src = `images/${property.imagesFolder}/${cover}`;
  img.alt = title;
}


    // WhatsApp — NÚMERO FIJO OFICIAL NURGUL
   const wa = card.querySelector("[data-prop-whatsapp]");
   if (wa) {
   wa.href = "https://wa.me/996559500551";
  }

    if (property.status === "sold") card.classList.add("property-sold");

    grid.appendChild(card);
  });

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
    localStorage.getItem("nurgul_lang") ||
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

window.NURGUL_refreshProperties = function () {
  const grid = document.querySelector(".properties-grid");
  if (!grid) return;

  // eliminar tarjetas actuales (menos template)
  grid.querySelectorAll(".property-card:not(.property-template)")
      .forEach(card => card.remove());

  // volver a renderizar
  if (typeof renderProperties === "function") {
    renderProperties();
  }
};
