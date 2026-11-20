const propiedades=[
{nombre:"Avellana - Pueblo Libre",dir:"Av. Brasil 1350",distrito:"Pueblo Libre",etapa:"En construcción",dorm:[1,2,3],m2:28,precio:251000,foto:"f1"},
{nombre:"Orquídea - Lince",dir:"Av. Militar 1727",distrito:"Lince",etapa:"Entrega inmediata",dorm:[1,3],m2:52,precio:319000,foto:"f2"},
{nombre:"Capulí - Surquillo",dir:"Av. Tomás Marsano 248",distrito:"Surquillo",etapa:"En construcción",dorm:[1,2,3],m2:41,precio:269000,foto:"f3"},
{nombre:"Bugambilias - Jesús María",dir:"Av. Brasil 1007",distrito:"Jesús María",etapa:"En construcción",dorm:[2,3],m2:60,precio:345000,foto:"f1"},
{nombre:"Jazmín - Magdalena",dir:"Av. Brasil 2100",distrito:"Magdalena",etapa:"Entrega inmediata",dorm:[2],m2:48,precio:298000,foto:"f2"},
{nombre:"Azucena - San Miguel",dir:"Av. La Marina 1850",distrito:"San Miguel",etapa:"En planos",dorm:[1,2],m2:35,precio:230000,foto:"f3"}
];
const lista=document.getElementById("lista"),vacio=document.getElementById("vacio");
const fDistrito=document.getElementById("fDistrito"),fEtapa=document.getElementById("fEtapa"),fDorm=document.getElementById("fDorm");
// Llenar los filtros con los datos
[...new Set(propiedades.map(p=>p.distrito))].forEach(d=>fDistrito.add(new Option(d,d)));
[...new Set(propiedades.map(p=>p.etapa))].forEach(e=>fEtapa.add(new Option(e,e)));
[1,2,3].forEach(n=>fDorm.add(new Option(n+(n===1?" dormitorio":" dormitorios"),n)));
function mostrar(){
  const d=fDistrito.value,e=fEtapa.value,n=Number(fDorm.value);
  const r=propiedades.filter(p=>(!d||p.distrito===d)&&(!e||p.etapa===e)&&(!n||p.dorm.includes(n)));
  lista.innerHTML=r.map(p=>`<article class="tarjeta"><div class="foto ${p.foto}">${p.distrito}</div><div class="cuerpo"><span class="etapa">${p.etapa}</span><h3>${p.nombre}</h3><p class="dir">${p.dir}</p><div class="datos"><div><b>${p.dorm.join(", ")}</b> dorm.<br>desde ${p.m2} m²</div><div class="precio">Desde<br><b>S/ ${p.precio.toLocaleString("es-PE")}</b></div></div></div></article>`).join("");
  vacio.style.display=r.length?"none":"block";
  lista.appendChild(vacio);
}
document.getElementById("buscar").addEventListener("click",mostrar);
mostrar();
// Menú móvil
const t=document.getElementById("toggle"),m=document.getElementById("menu");
t.addEventListener("click",()=>{const a=m.classList.toggle("abierto");t.setAttribute("aria-expanded",a)});
m.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>m.classList.remove("abierto")));
// Formulario de contacto
const f=document.getElementById("formContacto");
if(f)f.addEventListener("submit",ev=>{ev.preventDefault();
  document.getElementById("mensaje-ok").textContent="Gracias "+f.nombre.value+", te contactaremos pronto.";f.reset()});
