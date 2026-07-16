const LG_ICONS = {
  grinder: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="26" width="26" height="14" rx="3"/><path d="M34 30h9a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-9"/><circle cx="49" cy="36" r="9"/><circle cx="49" cy="36" r="3"/><path d="M14 26v-6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6"/><path d="M11 40v6M20 40v6"/></svg>`,
  drill: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 30h20l6-6h14a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H32l-6-6H6z"/><path d="M50 30l8-4v16l-8-4"/><path d="M6 22v16"/><path d="M18 40v10l-4 4"/><path d="M26 40v6"/></svg>`,
  saw: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="26" cy="34" r="16"/><path d="M26 18v2M26 48v2M42 34h-2M10 34h-2M37.3 22.7l-1.4 1.4M16 45.6l-1.4 1.4M37.3 45.3l-1.4-1.4M16 22.4l-1.4-1.4"/><path d="M40 30h16l4 4-4 4H40"/><rect x="6" y="46" width="20" height="10" rx="2"/></svg>`,
  machine: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="12" width="48" height="16" rx="2"/><path d="M16 28v10M48 28v10"/><rect x="12" y="38" width="40" height="8" rx="1"/><path d="M20 46v8M44 46v8M14 54h36"/><circle cx="22" cy="20" r="3"/><circle cx="32" cy="20" r="3"/><circle cx="42" cy="20" r="3"/></svg>`,
  heatgun: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 22h22a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6H30l-2 18h-6l-2-18h-6z"/><path d="M42 26h4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-4"/><path d="M52 24v10M58 27v4"/></svg>`,
  vacuum: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="24" cy="42" rx="16" ry="10"/><path d="M24 32v-8a6 6 0 0 1 6-6h4"/><path d="M40 18h8a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-2"/><path d="M10 50l-2 6M38 50l2 6"/></svg>`,
  valve: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="26" y="26" width="12" height="12" rx="2"/><path d="M8 32h18M38 32h18"/><path d="M32 26V14M24 14h16"/><rect x="4" y="28" width="6" height="8" rx="1"/><rect x="54" y="28" width="6" height="8" rx="1"/></svg>`,
  compressor: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="30" width="34" height="16" rx="3"/><circle cx="14" cy="52" r="4"/><circle cx="36" cy="52" r="4"/><path d="M14 30v-4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4"/><path d="M42 36h8a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6h-8"/></svg>`,
  pump: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="26" cy="34" r="14"/><path d="M26 24v20M18 34h16"/><path d="M40 30h10a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H40"/><path d="M12 48l-4 6M40 48l4 6"/></svg>`,
  glove: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 30V14a4 4 0 0 1 8 0v10M28 24V10a4 4 0 0 1 8 0v14M36 24v-8a4 4 0 0 1 8 0v20"/><path d="M44 26a4 4 0 0 1 8 0v14a16 16 0 0 1-16 16H26a14 14 0 0 1-14-14V34a4 4 0 0 1 8 0"/></svg>`,
  cement: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 22h36l4 8-6 26H16L10 30z"/><path d="M14 22l4-8h28l4 8"/><path d="M22 30h20M20 38h24M21 46h22"/></svg>`,
  basin: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 34h52"/><path d="M10 34a22 8 0 0 0 44 0"/><path d="M20 34V16a4 4 0 0 1 4-4h6"/><circle cx="30" cy="12" r="2"/><path d="M20 42v4a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6v-4"/><path d="M14 34l-4 8M50 34l4 8"/></svg>`,
  shower: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 20a14 14 0 0 1 28 0"/><rect x="10" y="20" width="36" height="8" rx="2"/><path d="M18 34v2M26 34v4M34 34v2M42 34v4"/><path d="M20 44v2M28 46v2M36 44v2M44 46v2"/><path d="M46 12h8v8"/></svg>`,
  faucet: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 44V20a6 6 0 0 1 6-6h8"/><path d="M30 14h16a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-6v6a8 8 0 0 1-8 8"/><path d="M16 44a10 4 0 0 0 20 0"/><path d="M26 44v8M26 56h0"/></svg>`,
  tmtbar: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8v40a6 6 0 0 0 6 6h6"/><path d="M12 14h8M12 22h8M12 30h8M12 38h8"/><path d="M44 8v40a6 6 0 0 1-6 6h-6"/><path d="M44 14h8M44 22h8M44 30h8M44 38h8"/></svg>`,
  pvcprofile: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="48" height="48" rx="3"/><rect x="16" y="16" width="32" height="32" rx="2"/><path d="M8 20h8M8 44h8M48 20h8M48 44h8M20 8v8M44 8v8M20 48v8M44 48v8"/></svg>`,
};

function lgPexels(id) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;
}

const LG_PHOTOS = {
  grinder: [
    5846151, 32298302, 4641061, 37702356, 32777401, 21326314, 13857088,
    13792037, 18651254, 16939419, 11143304, 1145434, 9665346, 1659749, 7272478,
    37384178, 9665383, 12526764, 13296065, 10894803, 20872013, 5846141, 8986131,
    4271641,
  ].map(lgPexels),
  drill: [
    9754811, 4889062, 6942294, 4980786, 8956313, 16679644, 14144281, 29226694,
    16679645, 28929513, 7479031, 5974029, 28752149, 21047659, 5846082, 28929510,
    16590703, 5846273, 5974038, 46973, 28231806, 7190982, 28231741, 3846086,
  ].map(lgPexels),
  saw: [
    7492884, 1249614, 7492585, 20318087, 37178402, 8817827, 7492584, 8820186,
    8817833, 8447845, 7492589, 20317629, 29246281, 12951637, 18512541, 12760004,
    30237909, 18866922, 9160880, 7496749, 7492875, 18866914, 7492882, 34602782,
  ].map(lgPexels),
  machine: [
    28929513, 28929510, 6942294, 4889062, 9754811, 16679644, 8956313, 5846082,
  ].map(lgPexels),
  heatgun: [29983191, 8956313, 16679645].map(lgPexels),
  compressor: [
    9754814, 31257317, 31095182, 20114436, 32588560, 3822938, 32391495,
    31095181,
  ].map(lgPexels),
  pump: [10518630, 10518632].map(lgPexels),
  glove: [357538, 8487733, 8487720].map(lgPexels),
  vacuum: [3616735].map(lgPexels),
  cement: [
    2469, 29519165, 29817952, 6473974, 30539627, 6474201, 27927317, 9226958,
    37539720, 10827453,
  ].map(lgPexels),
  basin: [
    10900773, 9118428, 6653889, 4960034, 13454051, 145512, 6337036, 17323749,
    10870117, 709749, 4915529, 4098762,
  ].map(lgPexels),
  shower: [
    4194865, 4194866, 4194864, 4194867, 161502, 4194841, 10486085, 10900761,
    34624415, 36650045,
  ].map(lgPexels),
  faucet: [
    30560253, 12040632, 10099095, 12196323, 861414, 34295404, 3616761,
    15409476, 11680481,
  ].map(lgPexels),
  // no verified photo yet for: valve
};

const LG_PHOTO_CURSOR = {};

function lgProductPhoto(p) {
  const pool = LG_PHOTOS[p.icon];
  if (!pool || !pool.length) return null;
  const i = LG_PHOTO_CURSOR[p.icon] || 0;
  LG_PHOTO_CURSOR[p.icon] = i + 1;
  return pool[i % pool.length];
}

function lgProductCard(brand, p, bc) {
  const icon = LG_ICONS[p.icon] || LG_ICONS.drill;
  const photo = lgProductPhoto(p);

  const media = photo
    ? `
      <img class="pcard-image" src="${photo}" alt="${p.type}" loading="lazy" />
      <div class="pcard-image-scrim"></div>
      <div class="pcard-icon-badge" aria-hidden="true">${icon}</div>`
    : `
      <div class="pcard-plate">
        <div class="pcard-icon" aria-hidden="true">${icon}</div>
      </div>`;

  const downloadUrl =
    "pdf-view.html?file=" +
    encodeURIComponent("lingaraja-product-datasheet-sample.pdf") +
    "&name=" +
    encodeURIComponent(p.name) +
    "&brand=" +
    encodeURIComponent(brand) +
    "&sku=" +
    encodeURIComponent(p.sku);

  return `
  <div class="pcard pcard-top" style="--bc:${bc}" data-type="${(p.type + " " + (p.spec || "")).trim()}" data-reveal>
    <div class="pcard-media${photo ? " has-photo" : ""}">
      <span class="pcard-badge">${brand}</span>
      <span class="pcard-wish" title="Save">&#9733;</span>${media}
      <span class="pcard-type">${p.type}</span>
    </div>
    <div class="pcard-body">
      <div class="pcard-sku">SKU ${p.sku} &middot; HS ${p.hs}</div>
      <h4>${p.name}</h4>
      <p>${p.desc}</p>
      <div class="pcard-actions">
        <a href="${downloadUrl}" target="_blank" class="btn btn-primary" title="View &amp; download datasheet">
          <i class="bi bi-download"></i>&nbsp; Download
        </a>
        <a href="https://wa.me/919999999999?text=${encodeURIComponent("Hi, I need pricing for " + brand + " " + p.name + " (SKU " + p.sku + ")")}" target="_blank" class="btn btn-ghost" title="WhatsApp Enquiry">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.1 8.1 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.9 1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5.2-.4a.5.5 0 0 0 0-.4c-.1-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.3 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c.6.3 1.1.4 1.5.6.6.2 1.2.1 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2s-.2-.2-.4-.3z"/></svg>
        </a>
      </div>
    </div>
  </div>`;
}

function lgRenderProducts(containerId, brand, list, bc) {
  const el = document.getElementById(containerId);
  if (!el) return;
  // Reset cursors so each brand page's grid starts its own cycle through
  // the pools rather than continuing from whatever ran before it.
  Object.keys(LG_PHOTO_CURSOR).forEach((k) => delete LG_PHOTO_CURSOR[k]);
  el.innerHTML = list.map((p) => lgProductCard(brand, p, bc)).join("");
  if (window.__lgObserveReveal) window.__lgObserveReveal();
}
