(() => {
  "use strict";
  const course = window.IAADC_COURSE;
  const root = document.getElementById("lesson-grid");
  const status = document.getElementById("library-status");
  const search = document.getElementById("lesson-search");
  const filter = document.getElementById("module-filter");
  if (!course || !root || !status || !search || !filter) return;
  const all = course.modules.flatMap(module => module.lessons.map((name, index) => ({
    id: "IAADC-M" + String(module.id).padStart(2,"0") + "-L" + String(index + 1).padStart(2,"0"),
    name, module: module.id, moduleTitle: module.title
  })));
  document.getElementById("course-total").textContent = all.length + " lecciones programadas";
  const published = new Map();
  const validVideo = v => v && /^IAADC-M(?:0[1-8])-L0[1-3]$/.test(v.lesson_id) &&
    v.status === "published" && /^https:\/\/(?:www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}$/.test(v.url);
  for (const module of course.modules) {
    const opt = document.createElement("option");
    opt.value = String(module.id);
    opt.textContent = String(module.id).padStart(2,"0") + " · " + module.title;
    filter.append(opt);
  }
  function node(type, className, content) {
    const el = document.createElement(type);
    if (className) el.className = className;
    if (content != null) el.textContent = content;
    return el;
  }
  function render() {
    const q = search.value.trim().toLocaleLowerCase("es");
    const entries = all.filter(x => (filter.value === "all" || String(x.module) === filter.value) &&
      (!q || (x.name+" "+x.moduleTitle).toLocaleLowerCase("es").includes(q)));
    root.replaceChildren();
    for (const item of entries) {
      const card=node("article","video-card");
      card.append(node("span","module","Módulo "+item.module+" · "+item.moduleTitle));
      card.append(node("h3","",item.name));
      card.append(node("span","info",item.id));
      const video=published.get(item.id);
      if (video) {
        const link=node("a","", "Ver clase en YouTube ↗");
        link.href=video.url; link.target="_blank";link.rel="noopener noreferrer";
        card.append(link);
      } else {
        card.append(node("span","pending","Video en preparación"));
      }
      root.append(card);
    }
    status.textContent=entries.length ? "Mostrando "+entries.length+" lecciones" : "No hay lecciones que coincidan con la búsqueda.";
  }
  search.addEventListener("input",render);
  filter.addEventListener("change",render);
  fetch("./videos-catalog.json", {cache:"no-store"}).then(r=>{if(!r.ok)throw Error("catálogo inaccesible");return r.json()})
    .then(data=>{
      if (!data || data.version!==1 || !Array.isArray(data.videos)) throw Error("catálogo inválido");
      const ids=new Set(all.map(x=>x.id));
      for(const v of data.videos) if(validVideo(v)&&ids.has(v.lesson_id)) published.set(v.lesson_id,v);
      document.getElementById("published-total").textContent=published.size+" videos publicados";
      render();
    })
    .catch(()=>{render();status.textContent+=" · No se pudo confirmar el catálogo de publicaciones.";});
  render();
})();