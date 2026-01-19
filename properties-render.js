/* ============================================================
   🏠 NURGUL REALTY — PROPERTIES RENDER ENGINE (FIX)
   ------------------------------------------------------------
   - Respeta idioma (localStorage: nurgul_lang)
   - Llena Address / Status / Details / Price / Published
   - Botón Information abre el modal genérico
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

    // Details
    card.querySelector("[data-prop-desc]").textContent = t.shortDesc || "";

    // Price
    card.querySelector("[data-prop-price]").textContent = t.price || "";

    // Published
    const pubEl = card.querySelector("[data-prop-date]");
    if (pubEl) pubEl.textContent = property.published || "—";

   // Image (usa carpeta propia de cada propiedad)
   const img = card.querySelector("[data-prop-img]");
   if (img) {
   img.src = `images/${property.imagesFolder}/house1.jpg`;
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
