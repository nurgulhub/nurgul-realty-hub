/* ============================================================
   🏠 NURGUL REALTY — PROPERTIES RENDER ENGINE
   ------------------------------------------------------------
   - Clona la tarjeta plantilla
   - Inserta datos desde properties-data.js
   - No altera el diseño
   - Escalable a múltiples propiedades
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

  /* ================= TEMPLATE ================= */
  template.style.display = "none";

  /* ============================================================
     🔹 RESOLVER ESTADO DE PROPIEDAD
     ============================================================ */
  function getPropertyStateLabel(property) {
    if (property.status === "sold") return "SOLD";
    if (property.status === "rented") return "RENTED";
    if (property.type === "sale") return "SALE";
    if (property.type === "rent") return "RENT";
    return "";
  }

  /* ============================================================
     🔹 RENDER PROPERTIES
     ============================================================ */
  PROPERTIES.forEach(property => {
    if (property.type !== "sale") return;

    const card = template.cloneNode(true);
    card.classList.remove("property-template");
    card.style.display = "";
    card.dataset.propertyId = property.id;

    /* ===== TEXTOS (RU por defecto) ===== */
    const lang = "ru";
    const t = property.texts?.[lang];
    if (!t) return;

    card.querySelector("[data-prop-title]").textContent = t.title || "";
    card.querySelector("[data-prop-location]").textContent = t.location || "";
    card.querySelector("[data-prop-desc]").textContent = t.shortDesc || "";
    card.querySelector("[data-prop-price]").textContent = t.price || "";

    /* ===== ESTADO (SALE / SOLD / RENT / RENTED) ===== */
    const stateEl = card.querySelector("[data-prop-state]");
    if (stateEl) {
      stateEl.textContent = getPropertyStateLabel(property);
    }

    /* ===== IMAGEN PRINCIPAL ===== */
    const img = card.querySelector("[data-prop-img]");
    if (img) {
      img.src = `images/${property.imagesFolder}/house1.jpg`;
      img.alt = t.title || "";
    }

    /* ===== WHATSAPP ===== */
    const wa = card.querySelector("[data-prop-whatsapp]");
    const contact = property.contacts?.[0];
    if (wa && contact?.phone) {
      wa.href = `https://wa.me/${contact.phone.replace(/\D/g, "")}`;
    }

    /* ===== ESTADO VISUAL ===== */
    if (property.status === "sold") {
      card.classList.add("property-sold");
    }

    grid.appendChild(card);
  });

  /* ============================================================
     🟧 2.3 — PROPERTY CARD ACTIONS
     (Information / Details)
     ============================================================ */
  grid.addEventListener("click", e => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;

    const card = btn.closest("[data-property-id]");
    if (!card) return;

    const propertyId = card.dataset.propertyId;
    const property = PROPERTIES.find(p => p.id === propertyId);
    if (!property) return;

    const lang = "ru";
    const t = property.texts?.[lang];
    if (!t) return;

    /* ===== INFORMATION ===== */
    if (btn.dataset.action === "info") {
      if (!t.fullInfo) return;

      if (typeof window.openPropertyInfo === "function") {
        window.openPropertyInfo(
          t.title,
          t.fullInfo,
          property.contacts || []
        );
      } else {
        console.warn("openPropertyInfo() not defined");
      }
    }

    /* ===== DETAILS (GALERÍA) ===== */
    if (btn.dataset.action === "details") {
      if (typeof window.openPropertyGallery === "function") {
        window.openPropertyGallery(property);
      } else {
        console.warn("openPropertyGallery() not defined");
      }
    }
  });

}); // 🔒 CIERRE CORRECTO DOMContentLoaded

/* ============================================================
   🟧 2.4.2 — PROPERTY INFO MODAL ENGINE
   ============================================================ */

window.openPropertyInfo = function(title, text, contacts){
  const modal = document.getElementById("propertyInfoModal");
  if(!modal) return;

  document.getElementById("propertyInfoTitle").textContent = title;
  document.getElementById("propertyInfoText").textContent = text;

  const contactsBox = document.getElementById("propertyInfoContacts");
  contactsBox.innerHTML = "";

  (contacts || []).forEach(c => {
    const a = document.createElement("a");
    a.href = `https://wa.me/${c.phone.replace(/\D/g,"")}`;
    a.target = "_blank";
    a.textContent = `${c.name}: ${c.phone}`;
    contactsBox.appendChild(a);
  });

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

/* ===== CLOSE ===== */
document.addEventListener("click", e => {
  if(
    e.target.classList.contains("property-modal-overlay") ||
    e.target.classList.contains("property-modal-close")
  ){
    const modal = document.getElementById("propertyInfoModal");
    modal?.classList.remove("active");
    document.body.style.overflow = "";
  }
});
