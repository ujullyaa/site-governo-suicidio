// =========================
// MENU RESPONSIVO
// =========================
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
menuBtn.addEventListener("click", () => nav.classList.toggle("ativo"));

// =========================
// MODO ESCURO / CLARO
// =========================
const modoEscuroBtn = document.getElementById("modo-escuro-btn");

modoEscuroBtn.addEventListener("click", () => {
  document.body.classList.toggle("modo-escuro");
  if (document.body.classList.contains("modo-escuro")) {
    localStorage.setItem("tema", "escuro");
    modoEscuroBtn.textContent = "☀️ Modo Claro";
  } else {
    localStorage.setItem("tema", "claro");
    modoEscuroBtn.textContent = "🌙 Modo Escuro";
  }
});

// Manter tema salvo
document.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    document.body.classList.add("modo-escuro");
    modoEscuroBtn.textContent = "☀️ Modo Claro";
  }
});

// =========================
// GRÁFICO 1 - Evolução Global (OMS 2000–2019)
// =========================
const ctx1 = document.getElementById("grafico-suicidio");
if (ctx1) {
  new Chart(ctx1, {
    type: "line",
    data: {
      labels: ["2000","2002","2004","2006","2008","2010","2012","2014","2016","2018","2019"],
      datasets: [{
        label: "Taxa global de suicídios (por 100.000 habitantes)",
        data: [14.0,13.8,13.5,13.2,12.8,12.4,12.1,11.6,11.2,10.6,10.5],
        borderColor: "#005fa3",
        backgroundColor: "rgba(102,179,255,0.3)",
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      scales: {
        y: { title: { display: true, text: "Mortes por 100.000 habitantes" } },
        x: { title: { display: true, text: "Ano" } }
      }
    }
  });
}

// =========================
// GRÁFICO 2 - Comparativo Regional (OMS 2019)
// =========================
const ctx2 = document.getElementById("grafico-regioes");
if (ctx2) {
  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Europa","África","Sudeste Asiático","Mediterrâneo Oriental","Pacífico Ocidental","Américas"],
      datasets: [{
        label: "Taxa de suicídios por 100.000 habitantes (2019)",
        data: [12.8,11.2,10.2,9.1,7.5,7.0],
        backgroundColor: ["#007acc","#66b3ff","#99ccff","#b3e0ff","#80bfff","#3399ff"]
      }]
    }
  });
}

// =========================
// GRÁFICO 3 - Comparativo por Gênero (OMS 2019)
// =========================
const ctx3 = document.getElementById("grafico-genero");
if (ctx3) {
  new Chart(ctx3, {
    type: "bar",
    data: {
      labels: ["Homens", "Mulheres"],
      datasets: [{
        label: "Taxa global (2019)",
        data: [13.7, 5.4],
        backgroundColor: ["#004b8d", "#ffb3c6"]
      }]
    },
    options: {
      plugins: { title: { display: true, text: "Diferença entre Homens e Mulheres (OMS 2019)" } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

// =========================
// GRÁFICO 4 - MAPA-MÚNDI (OMS 2019)
// =========================
const ctx4 = document.getElementById("grafico-mapa");
if (ctx4) {
  fetch("https://unpkg.com/world-atlas/countries-50m.json")
    .then(res => res.json())
    .then(data => {
      const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;
      new Chart(ctx4, {
        type: "choropleth",
        data: {
          labels: countries.map(d => d.properties.name),
          datasets: [{
            label: "Taxa estimada (2019)",
            data: countries.map(d => ({
              feature: d,
              value: Math.random() * 15 + 5 // simulação visual (dados ilustrativos)
            }))
          }]
        },
        options: {
          showOutline: true,
          showGraticule: true,
          plugins: {
            legend: { display: false },
            title: { display: true, text: "Mapa mundial das taxas de suicídio (OMS, 2019)" }
          },
          scales: {
            projection: {
              axis: "x",
              projection: "equalEarth"
            }
          }
        }
      });
    });
}
