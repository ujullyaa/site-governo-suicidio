// =========================
// MENU RESPONSIVO
// =========================
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("ativo");
});

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
  console.log("Site governamental de prevenção carregado com sucesso!");
});

// =========================
// GRÁFICO 1 - Evolução Global (OMS 2000–2019)
// =========================
const ctx1 = document.getElementById("grafico-suicidio");
if (ctx1) {
  new Chart(ctx1, {
    type: "line",
    data: {
      labels: [
        "2000", "2002", "2004", "2006", "2008", "2010",
        "2012", "2014", "2016", "2018", "2019"
      ],
      datasets: [{
        label: "Taxa global de suicídios (por 100.000 habitantes)",
        data: [14.0, 13.8, 13.5, 13.2, 12.8, 12.4, 12.1, 11.6, 11.2, 10.6, 10.5],
        borderColor: "#005fa3",
        backgroundColor: "rgba(102,179,255,0.3)",
        tension: 0.3,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "#005fa3"
      }]
    },
    options: {
      scales: {
        y: { title: { display: true, text: "Mortes por 100.000 habitantes" } },
        x: { title: { display: true, text: "Ano" } }
      },
      plugins: {
        legend: { labels: { color: "#003366" } }
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
      labels: [
        "Europa", "África", "Sudeste Asiático",
        "Mediterrâneo Oriental", "Pacífico Ocidental", "Américas"
      ],
      datasets: [{
        label: "Taxa de suicídios por 100.000 habitantes (2019)",
        data: [12.8, 11.2, 10.2, 9.1, 7.5, 7.0],
        backgroundColor: [
          "#007acc", "#66b3ff", "#99ccff", "#b3e0ff", "#80bfff", "#3399ff"
        ],
        borderColor: "#004b8d",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, title: { display: true, text: "Mortes por 100.000 habitantes" } }
      },
      plugins: {
        legend: { display: false },
        title: { display: true, text: "Comparativo regional das taxas segundo a OMS (2019)" }
      }
    }
  });
}
