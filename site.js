(() => {
 "use strict";
 const data=window.IAADC_COURSE;
 if(!data) return;
 const moduleList=document.getElementById("module-list");
 moduleList.replaceChildren();
 for(const item of data.modules){
   const row=document.createElement("article");row.className="module-row";
   const num=document.createElement("span");num.className="module-index";num.textContent=String(item.id).padStart(2,"0");
   const main=document.createElement("div");main.className="module-main";
   const h=document.createElement("h3");h.textContent=item.title;
   const p=document.createElement("p");p.textContent=item.subtitle;
   main.append(h,p);
   const toggle=document.createElement("button");toggle.type="button";toggle.className="module-toggle";toggle.textContent="+";
   const detailId="modulo-"+item.id+"-lecciones";
   toggle.setAttribute("aria-label","Mostrar lecciones de "+item.title);
   toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-controls",detailId);
   const details=document.createElement("div");details.className="module-details";details.id=detailId;
   const list=document.createElement("ul");
   for(const lesson of item.lessons){const li=document.createElement("li");li.textContent=lesson;list.append(li);}
   details.append(list);row.append(num,main,toggle,details);
   toggle.addEventListener("click",()=>{
     const active=toggle.getAttribute("aria-expanded")==="true";
     toggle.setAttribute("aria-expanded",String(!active));
     toggle.setAttribute("aria-label",(active?"Mostrar":"Ocultar")+" lecciones de "+item.title);
     toggle.textContent=active?"+":"−";
     details.classList.toggle("open",!active);
   });
   moduleList.append(row);
 }
 const tabs=[...document.querySelectorAll(".route-tab")],panel=document.querySelector(".route-visual");
 function activateRoute(key,focus){
   const route=data.routes[key];if(!route)return;
   for(const tab of tabs){
     const active=tab.dataset.route===key;
     tab.classList.toggle("active",active);
     tab.setAttribute("aria-selected",String(active));
     tab.tabIndex=active?0:-1;
     if(active&&focus)tab.focus();
   }
   for(const [id,value] of Object.entries({
      "route-tag":route.tag,"route-title":route.title,
      "route-description":route.description,"route-example1":route.example1,
      "route-example2":route.example2,"route-document-title":route.document,
      "demo-question":"“"+route.question+"”","demo-result":route.result
   })){const el=document.getElementById(id);if(el)el.textContent=value;}
   if(panel)panel.style.backgroundColor=route.tone;
 }
 tabs.forEach((tab,index)=>{
   tab.addEventListener("click",()=>activateRoute(tab.dataset.route,false));
   tab.addEventListener("keydown",event=>{
      const dir=event.key==="ArrowRight"?1:event.key==="ArrowLeft"?-1:0;
      if(!dir)return;event.preventDefault();
      const next=tabs[(index+dir+tabs.length)%tabs.length];
      activateRoute(next.dataset.route,true);
   });
 });
 const menuButton=document.querySelector(".menu-toggle"),menu=document.getElementById("mobile-nav");
 function setMenu(open){
   menu.hidden=!open;
   menuButton.setAttribute("aria-expanded",String(open));
   menuButton.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú");
 }
 menuButton.addEventListener("click",()=>setMenu(menu.hidden));
 menu.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>setMenu(false)));
 document.getElementById("year").textContent=String(new Date().getFullYear());
})();
