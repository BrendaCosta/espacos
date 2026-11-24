const grid = document.getElementById("spacesGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const amenityFilter = document.getElementById("amenityFilter");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const dialog = document.getElementById("spaceDialog");
const dialogContent = document.getElementById("dialogContent");

function renderSpaces() {
  const q = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const category = categoryFilter.value;
  const amenity = amenityFilter.value;
  const spaces = (window.ESPACOS || []).filter(s => {
    const searchable = [s.nome, s.bairro, s.cidade, s.descricao, ...(s.comodidades || [])].join(" ").toLocaleLowerCase("pt-BR");
    return (!q || searchable.includes(q)) && (!category || s.categoria === category) && (!amenity || s.comodidades.includes(amenity));
  });
  resultCount.textContent = `${spaces.length} ${spaces.length === 1 ? "espaço encontrado" : "espaços encontrados"}`;
  emptyState.hidden = spaces.length > 0;
  grid.innerHTML = spaces.map(s => `
    <article class="space-card" tabindex="0" role="button" aria-label="Ver detalhes de ${s.nome}" data-id="${s.id}">
      <div class="space-image"><img src="${s.imagem}" alt="Ambiente interno do ${s.nome}, com mesas, iluminação colorida e área de karaokê"><span class="space-tag">${s.categoria}</span></div>
      <div class="space-info"><h3>${s.nome}</h3><div class="location">⌖ ${s.bairro} · ${s.cidade}/${s.estado}</div>
      <div class="amenities">${s.comodidades.map(a => `<span class="amenity">${a}</span>`).join("")}</div>
      <div class="card-bottom"><span>${s.preco}</span><strong>Conhecer espaço ↗</strong></div></div>
    </article>`).join("");
  grid.querySelectorAll(".space-card").forEach(card => {
    card.addEventListener("click", () => openSpace(card.dataset.id));
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openSpace(card.dataset.id); }});
  });
}
function openSpace(id) {
  const s = window.ESPACOS.find(x => x.id === id);
  if (!s) return;
  const whatsapp = s.whatsapp ? `<a href="https://wa.me/${s.whatsapp.replace(/\D/g,"")}" target="_blank" rel="noopener">Conversar pelo WhatsApp ↗</a>` : `<a class="secondary" href="${s.instagram}" target="_blank" rel="noopener">Falar pelo Instagram ↗</a>`;
  dialogContent.innerHTML = `<div class="dialog-layout"><img src="${s.imagem}" alt="Foto do ${s.nome}"><div class="dialog-copy"><span class="eyebrow">CONHEÇA O ESPAÇO</span><h2>${s.nome}</h2><p>${s.descricao}</p><div class="amenities">${s.comodidades.map(a=>`<span class="amenity">${a}</span>`).join("")}</div><div class="detail-row"><b>Localização</b>${s.bairro}, ${s.cidade} — ${s.estado}</div><div class="detail-row"><b>Valores</b>${s.preco}</div><div class="detail-row"><b>Capacidade e endereço</b>A confirmar com o estabelecimento</div><div class="dialog-actions">${whatsapp}<a class="secondary" href="${s.instagram}" target="_blank" rel="noopener">Ver Instagram ↗</a></div><p class="demo-note">Demonstração: confirme disponibilidade, capacidade, valores e condições diretamente com o estabelecimento.</p></div></div>`;
  dialog.showModal();
}
[searchInput, categoryFilter, amenityFilter].forEach(el => el.addEventListener("input", renderSpaces));
document.getElementById("clearFilters").addEventListener("click", () => { searchInput.value = ""; categoryFilter.value = ""; amenityFilter.value = ""; renderSpaces(); });
document.getElementById("closeDialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
renderSpaces();
