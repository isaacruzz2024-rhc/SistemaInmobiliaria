const propiedades = [
  { nombre: "Avellana - Pueblo Libre", dir: "Av. Brasil 1350", distrito: "Pueblo Libre", etapa: "En construcción", dorm: [1, 2, 3], m2: 28, precio: 251000, foto: "f1", img: "img/p1.jpg" },
  { nombre: "Orquídea - Lince", dir: "Av. Militar 1727", distrito: "Lince", etapa: "Entrega inmediata", dorm: [1, 3], m2: 52, precio: 319000, foto: "f2", img: "img/p2.jpg" },
  { nombre: "Capulí - Surquillo", dir: "Av. Tomás Marsano 248", distrito: "Surquillo", etapa: "En construcción", dorm: [1, 2, 3], m2: 41, precio: 269000, foto: "f3", img: "img/p3.jpg" },
  { nombre: "Bugambilias - Jesús María", dir: "Av. Brasil 1007", distrito: "Jesús María", etapa: "En construcción", dorm: [2, 3], m2: 60, precio: 345000, foto: "f1", img: "img/p4.jpg" },
  { nombre: "Jazmín - Magdalena", dir: "Av. Brasil 2100", distrito: "Magdalena", etapa: "Entrega inmediata", dorm: [2], m2: 48, precio: 298000, foto: "f2", img: "img/p5.jpg" },
  { nombre: "Azucena - San Miguel", dir: "Av. La Marina 1850", distrito: "San Miguel", etapa: "En planos", dorm: [1, 2], m2: 35, precio: 230000, foto: "f3", img: "img/p6.jpg" }
];

const lista = document.getElementById("lista");
const vacio = document.getElementById("vacio");
const fDistrito = document.getElementById("fDistrito");
const fEtapa = document.getElementById("fEtapa");
const fDorm = document.getElementById("fDorm");

if (fDistrito && fEtapa && fDorm && lista) {
  [...new Set(propiedades.map(p => p.distrito))].forEach(d => fDistrito.add(new Option(d, d)));
  [...new Set(propiedades.map(p => p.etapa))].forEach(e => fEtapa.add(new Option(e, e)));
  [1, 2, 3].forEach(n => fDorm.add(new Option(n + (n === 1 ? " dormitorio" : " dormitorios"), n)));
}

function mostrar() {
  if (!lista || !fDistrito || !fEtapa || !fDorm) return;
  const d = fDistrito.value;
  const e = fEtapa.value;
  const n = Number(fDorm.value);
  const r = propiedades.filter(p => (!d || p.distrito === d) && (!e || p.etapa === e) && (!n || p.dorm.includes(n)));
  lista.innerHTML = r.map(p => `<article class="tarjeta"><div class="foto ${p.foto}"><img src="${p.img}" alt="${p.nombre}"><span>${p.distrito}</span></div><div class="cuerpo"><span class="etapa">${p.etapa}</span><h3>${p.nombre}</h3><p class="dir">${p.dir}</p><div class="datos"><div><b>${p.dorm.join(", ")}</b> dorm.<br>desde ${p.m2} m²</div><div class="precio">Desde<br><b>S/ ${p.precio.toLocaleString("es-PE")}</b></div></div></div></article>`).join("");
  if (vacio) {
    vacio.style.display = r.length ? "none" : "block";
  }
}

const btnBuscar = document.getElementById("buscar");
if (btnBuscar) {
  btnBuscar.addEventListener("click", mostrar);
}
mostrar();

const t = document.getElementById("toggle");
const m = document.getElementById("menu");
if (t && m) {
  t.addEventListener("click", () => {
    const a = m.classList.toggle("abierto");
    t.setAttribute("aria-expanded", a);
  });
  m.querySelectorAll("a").forEach(a => a.addEventListener("click", () => m.classList.remove("abierto")));
}

const f = document.getElementById("formContacto");
if (f) {
  f.addEventListener("submit", ev => {
    ev.preventDefault();
    const ok = document.getElementById("mensaje-ok");
    if (ok) {
      ok.textContent = "Gracias " + f.nombre.value + ", te contactaremos pronto.";
    }
    f.reset();
  });
}
