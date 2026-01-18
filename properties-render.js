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
    if (property.type !== "sale") return;

    const t = pickTexts(property);
    if (!t) return;

    const card = template.cloneNode(true);
    card.classList.remove("property-template");
    card.style.display = "";
    card.dataset.propertyId = property.id;

    // Título “tipo Royal” -> SIEMPRE visible
    const title = (t.title && t.title.trim()) ? t.title : "Royal";
    card.querySelector("[data-prop-title]").textContent = title;

    // Location (línea suelta)
    card.querySelector("[data-prop-location]").textContent = t.location || "";

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

    // Image
    const img = card.querySelector("[data-prop-img]");
    if (img) {
      img.src = `images/${property.imagesFolder}/house1.jpg`;
      img.alt = title;
    }

    // WhatsApp
    const wa = card.querySelector("[data-prop-whatsapp]");
    const contact = property.contacts?.[0];
    if (wa && contact?.phone) {
      wa.href = `https://wa.me/${String(contact.phone).replace(/\D/g, "")}`;
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
