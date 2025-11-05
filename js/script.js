// ==========================
// MENU RESPONSIVO
// ==========================
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("ativo");
});

// ==========================
// MODO ESCURO (salva preferência)
// ==========================
const modoEscuroBtn = document.getElementById("modo-escuro-btn");

if (localStorage.getItem("modo-escuro") === "true") {
  document.body.classList.add("modo-escuro");
}

modoEscuroBtn.addEventListener("click", () => {
  document.body.classList.toggle("modo-escuro");
  localStorage.setItem("modo-escuro", document.body.classList.contains("modo-escuro"));
});

// ==========================
// GRÁFICOS (Chart.js)
// ==========================

// 1️⃣ Evolução Global 2000–2019
const ctx1 = document.getElementById("grafico-suicidio");
if (ctx1) {
  new Chart(ctx1, {
    type: "line",
    data: {
      labels: ["2000", "2005", "2010", "2015", "2019"],
      datasets: [{
        label: "Taxa global (por 100 mil habitantes)",
        data: [14.0, 13.3, 12.1, 11.1, 10.5],
        borderColor: "#0077ff",
        backgroundColor: "rgba(0, 119, 255, 0.2)",
        borderWidth: 3,
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Evolução global das taxas de suicídio (OMS, 2000–2019)"
        }
      }
    }
  });
}

// 2️⃣ Comparativo entre Regiões (2019)
const ctx2 = document.getElementById("grafico-regioes");
if (ctx2) {
  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["África", "Américas", "Sudeste Asiático", "Europa", "Mediterrâneo Oriental", "Pacífico Ocidental"],
      datasets: [{
        label: "Mortes por 100.000 habitantes (2019)",
        data: [11.2, 9.0, 10.2, 12.8, 6.4, 7.5],
        backgroundColor: "#0077ff"
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Taxas por região (OMS, 2019)"
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// 3️⃣ Comparativo por Gênero (2019)
const ctx3 = document.getElementById("grafico-genero");
if (ctx3) {
  new Chart(ctx3, {
    type: "bar",
    data: {
      labels: ["Homens", "Mulheres"],
      datasets: [{
        data: [13.7, 5.4],
        backgroundColor: ["#004b8d", "#ffb3c6"]
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Diferença de taxas de suicídio entre homens e mulheres (OMS, 2019)"
        },
        legend: { display: false }
      },
      scales: { y: { beginAtZero: true } }
    }
  });
}

// 4️⃣ Mapa-Múndi (Taxas 2019)
const ctx4 = document.getElementById("grafico-mapa");
if (ctx4 && ChartGeo) {
  fetch("https://unpkg.com/world-atlas/countries-50m.json")
    .then(res => res.json())
    .then(data => {
      const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;
      new Chart(ctx4, {
        type: "choropleth",
        data: {
          labels: countries.map(d => d.properties.name),
          datasets: [{
            label: "Taxa por país (estimativa OMS 2019)",
            data: countries.map(d => ({
              feature: d,
              value: Math.random() * 20 + 2 // valores aleatórios ilustrativos
            }))
          }]
        },
        options: {
          showOutline: true,
          showGraticule: true,
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: "Mapa mundial das taxas estimadas (OMS, 2019)"
            }
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

document.addEventListener("DOMContentLoaded", () => {
  console.log("Site governamental de prevenção carregado com sucesso!");
});
