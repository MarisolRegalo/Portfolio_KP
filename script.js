/* =====================================================
   FOTO DE PERFIL Y BANNER
   1. Pon tus imágenes dentro de la carpeta "media".
   2. Nómbralas igual que abajo (perfil.jpg y banner.jpg).
   Si el archivo no existe, se muestran las iniciales "KP" y el fondo normal.
   ===================================================== */
const PROFILE_PHOTO = "media/fotoPerfilPortafolio.jpg";
const BANNER_PHOTO = "media/BannerPortafolio.jpg";

/* =====================================================
   FOTOS Y VIDEOS DE CADA PROYECTO
   Para agregar un video de OneDrive usa la siguiente estructura en "media":
     { type: "onedrive", url: "https://tu-enlace-de-onedrive-compartido" }
   Asegúrate de que en el arreglo "allow" diga "onedrive". Ej: allow: ["onedrive"]
   ===================================================== */
const PROJECTS = [
  {
    id: "bienestar365", year: 2024,
    allow: ["onedrive"], /* <-- Nota que ahora dice onedrive */
    logo: "media/bienestar365/logo.jpg", logoBg: "#fefefe", title: "Bienestar365", meta: "Hackathon · 2024", tag: "Health & wellness", mark: "B365",
    description: "Development of a website focused on promoting well-being and making health-related information more accessible.",
    role: "Designer", tools: ["Power Apps", "Figma", "Planner"], achievements: [],
    media: [
      /* 👇 ASÍ SE AGREGA EL BOTÓN DE ONEDRIVE 👇 */
      { type: "onedrive", url: "https://superate2014-my.sharepoint.com/:v:/g/personal/katherine_perez2026_hilasal_superate_org/IQC8StC8K5iCTrhLkSajHO6AAW5xS2wj29GDp2j6pbs93ds?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=Nh6Tsr" }
    ]
  },
  { id: "nouva", website: "", year: 2025, allow: ["image", "onedrive"], logo: "media/nouva/logo.jpg", logoBg: "#00224f", title: "NOUVA", meta: "Expo Logros · 2025", tag: "Career guidance", mark: "N", description: "A digital proposal designed to help high school students explore academic options and make more informed career choices.", role: "Pitch", tools: ["HTML", "Python", "SQL", "Tailwind CSS", "GitHub"], achievements: [], media: [] },
  { id: "pipo", year: 2025, allow: ["onedrive"], logo: "media/pipo/logo.jpg", logoBg: "#ffffff", title: "PIPO", meta: "Technology project · 2025", tag: "Pet products & services", mark: "P", description: "A website prototype focused on the sale of products, food, and services for pets.", role: "", tools: ["Figma"], achievements: [], media: [{ type: "onedrive", url: "https://superate2014-my.sharepoint.com/:v:/g/personal/katherine_perez2026_hilasal_superate_org/IQAExnzb83iUT5JwMm6Tm-iqAbmHeqZt0-JaSEiVkr8jY0U?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=N6fmBx"}] },
  { id: "sagas-store", year: 2025, allow: ["onedrive"], logo: "media/sagas-store/logo.jpg", logoBg: "#a8d270", title: "Sagas Store", meta: "Technology project · 2025", tag: "E-commerce", mark: "SS", description: "Design of a website prototype focused on shopping for products from nearby stores.", role: "", tools: ["Figma"], achievements: [], media: [{ type: "onedrive", url: "https://superate2014-my.sharepoint.com/:v:/g/personal/katherine_perez2026_hilasal_superate_org/IQCB4cqbN58yQIlF5bLbimFOAV3K7gxs2_2g_kDxkQG1xjo?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=hJ8l9c" }] },
  { id: "loqalli", website: "https://loqalli-expo-tech.vercel.app/", year: 2026, allow: ["onedrive"], logo: "media/loqalli/logo.jpg", logoBg: "#fefefe", title: "Loqalli", meta: "Expo Tech · 2026", tag: "Digital tourism", mark: "L", description: "A digital proposal connecting users with tourism experiences in El Salvador and helping them discover local activities.", role: "Designer", tools: ["Python", "Next.js", "Node.js", "GitHub"], achievements: [], media: [{ type: "onedrive", url: "https://superate2014-my.sharepoint.com/:v:/g/personal/katherine_perez2026_hilasal_superate_org/IQAtu3nmERyES7DeCih63uefAVJFa-EIWwgtIjz-KxqvNtc?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=MaCLOg" }] }
];

const CERTIFICATIONS = [
  { date: "2025-01", title: "Microsoft Excel", issuer: "Microsoft Excel Certification", year: "2025", kind: "Excel", url: "https://www.credly.com/badges/4210ead7-6db5-4853-9bec-51e26d92e229/public_url", image: "" },
  { date: "2026-01", title: "Microsoft Excel Expert", issuer: "Microsoft Excel Expert Certification", year: "2026", kind: "Excel", url: "https://www.credly.com/badges/b8194000-3931-4fb8-beca-7cd592c8d347/public_url", image: "" },
  { date: "2026-10-21", title: "N8n", issuer: "Platzi", year: "2026", kind: "Platzi", url: "", image: "media/certificados/platzi-n8n.pdf" },
  { date: "2026-10-21", title: "Advanced English C1: Colloquial and Everyday Language", issuer: "Platzi", year: "2026", kind: "Platzi", url: "", image: "media/certificados/platzi-advanced-english-c1.pdf" },
  { date: "2026-10-27", title: "Marca personal", issuer: "Platzi", year: "2026", kind: "Platzi", url: "", image: "media/certificados/platzi-marca-personal.pdf" },
  { date: "2026-06-04", title: "Derechos humanos", issuer: "Empower El Salvador", year: "2026", kind: "Empower El Salvador", url: "", image: "media/certificados/empower-derechos-humanos.pdf" },
  { date: "2026-06-18", title: "La verdad sobre las drogas", issuer: "Empower El Salvador", year: "2026", kind: "Empower El Salvador", url: "", image: "media/certificados/empower-la-verdad-sobre-las-drogas.pdf" },
  { date: "2026-05-30", title: "Seminario de valores", issuer: "Empower El Salvador", year: "2026", kind: "Empower El Salvador", url: "", image: "media/certificados/empower-seminario-de-valores.pdf" }
];

/* ===================== CÓDIGO DEL SITIO ===================== */
const projectGrid = document.getElementById("projectGrid");
const modal = document.getElementById("projectModal");
const modalMedia = document.getElementById("modalMedia");

function infoBlocks(p) {
  let h = "";
  if (p.role) h += `<div><span class="info-label">My participation</span><span class="role-badge">${p.role}</span></div>`;
  if (p.website) h += `<div><span class="info-label">Visit website</span><a class="site-link" href="${p.website}" target="_blank" rel="noopener">${p.website.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗</a></div>`;
  if (p.tools && p.tools.length) h += `<div><span class="info-label">Tools used</span><div class="tools">${p.tools.map(t => `<span>${t}</span>`).join("")}</div></div>`;
  
  if (p.achievements && p.achievements.length) h += `<div><span class="info-label">Achievements</span><ul class="achievements">${p.achievements.map(a => `<li>${a}</li>`).join("")}</ul></div>`;
  return h;
}
function coverContent(p) {
  if (!p.logo) return `<div class="cover-mark">${p.mark}</div>`;
  return `<img class="cover-logo" style="background:${p.logoBg || "transparent"}" src="${p.logo}" alt="${p.title} logo" onerror="this.outerHTML='<div class=\\'cover-mark\\'>${p.mark}</div>'">`;
}
function renderProjects() {
  PROJECTS.sort((a, b) => b.year - a.year);
  projectGrid.innerHTML = PROJECTS.map(p => `<article class="project-card"><div class="project-cover"${p.logoBg ? ` style="background:${p.logoBg}"` : ""}>${coverContent(p)}</div><div class="project-body"><div class="project-meta">${p.meta}</div><h3>${p.title}</h3><p>${p.description}</p><div class="project-info">${infoBlocks(p)}</div><div class="project-foot"><span class="tag">${p.tag}</span><button class="details-btn" data-project="${p.id}">View project ↗</button></div></div></article>`).join("");
}
function certSymbol(k) { return k === "Platzi" ? "P" : (k === "Excel" ? "X" : "E") }
function renderCertifications() {
  CERTIFICATIONS.sort((a, b) => b.date.localeCompare(a.date));
  document.getElementById("certGrid").innerHTML = CERTIFICATIONS.map(c => `
  <article class="cert-card">
   <div class="cert-top"><span class="cert-symbol">${certSymbol(c.kind)}</span><span class="cert-type">${c.kind}</span></div>
   <h3>${c.title}</h3><p>${c.issuer}${c.year ? " · " + c.year : ""}</p>
   ${c.url ? `<a class="cert-link" href="${c.url}" target="_blank" rel="noopener">Verify certificate ↗</a>` : (c.image ? `<a class="cert-link" href="${c.image}" target="_blank">View certificate ↗</a>` : `<span class="cert-link">Certificate details to be added</span>`)}
  </article>`).join("");
}
function openProject(id) {
  const p = PROJECTS.find(x => x.id === id); if (!p) return;
  document.getElementById("modalMeta").textContent = p.meta;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDescription").textContent = p.description;
  document.getElementById("modalInfo").innerHTML = infoBlocks(p);

  const allow = p.allow || ["image", "onedrive"];
  const only = allow.length === 1;
  const items = (p.media || []).filter(m => allow.includes(m.type));

  document.getElementById("mediaTitle").textContent = only && allow[0] === "onedrive" ? "Project video" : "Project gallery";
  modalMedia.className = "media-grid" + (only ? " single" : "");

  if (!items.length) {
    let ph = "";
    if (allow.includes("image")) ph += '<div class="media-slot"><img src="media/PitchPicture.jpg" alt="Project picture" style="max-width:100%;border-radius:8px;"></div>';
    if (allow.includes("onedrive")) ph += '<div class="media-slot"><strong>PDF Document</strong><iframe src="media/NouvaPitch.pdf" width="100%" height="500" style="border:0;"></iframe></div>';
    modalMedia.innerHTML = ph;
  } else {
    modalMedia.innerHTML = items.map(m => {
      if (m.type === "onedrive") {
        return `<div class="media-slot" style="justify-content:center; text-align:center;">
                <strong>Project video</strong>
                <span style="display:block; margin: 10px 0 18px; font-size: 0.85rem;">This video is hosted on OneDrive for faster loading.</span>
                <a href="${m.url}" target="_blank" rel="noopener" class="btn primary" style="text-decoration:none;">Watch video on OneDrive ↗</a>
              </div>`;
      } else if (m.type === "video") {
        return `<div class="media-slot"><video controls preload="metadata" src="${m.src}"></video></div>`;
      } else {
        return `<div class="media-slot"><img src="${m.src}" alt="${m.alt || p.title}" loading="lazy"></div>`;
      }
    }).join("");
  }
  modal.classList.add("open"); document.body.style.overflow = "hidden"; document.getElementById("closeModal").focus();
}
function closeProject() { modal.classList.remove("open"); document.body.style.overflow = ""; }

/* Carga directa de Foto de perfil + banner (Sin interacción de botones) */
const hero = document.getElementById("home");
const avatar = document.getElementById("avatar");
const heroBanner = document.getElementById("heroBanner");

function setAvatar(src) { if (!src) return; avatar.style.backgroundImage = `url("${src}")`; avatar.classList.add("has-photo") }
function setBanner(src) { if (!src) return; heroBanner.style.backgroundImage = `url("${src}")`; hero.classList.add("has-banner") }

function loadIfExists(src, apply) {
  if (!src) return;
  const img = new Image();
  img.onload = () => apply(src);
  img.src = src;
}

// Carga las imágenes si existen en la carpeta media
loadIfExists(PROFILE_PHOTO, setAvatar);
loadIfExists(BANNER_PHOTO, setBanner);

// Event Listeners básicos
projectGrid.addEventListener("click", e => { const b = e.target.closest("[data-project]"); if (b) openProject(b.dataset.project) });
document.getElementById("closeModal").addEventListener("click", closeProject);
modal.addEventListener("click", e => { if (e.target === modal) closeProject() });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeProject() });
document.getElementById("menuBtn").addEventListener("click", () => document.getElementById("navLinks").classList.toggle("show"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => document.getElementById("navLinks").classList.remove("show")));
document.getElementById("year").textContent = new Date().getFullYear();

// Renderizado inicial
renderProjects();
renderCertifications();