// ==========================
// MENU RESPONSIVO
// ==========================
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
menuBtn.addEventListener("click", () => nav.classList.toggle("ativo"));

// ==========================
// MODO ESCURO (salva preferência)
// ==========================
const modoEscuroBtn = document.getElementById("modo-escuro-btn");
if (localStorage.getItem("modo-escuro") === "true") document.body.classList.add("modo-escuro");
modoEscuroBtn.addEventListener("click", () => {
  document.body.classList.toggle("modo-escuro");
  localStorage.setItem("modo-escuro", document.body.classList.contains("modo-escuro"));
});

// ==========================
// GRÁFICOS (Chart.js)
// ==========================

// 1️⃣ Evolução global (2000–2021)
const ctx1 = document.getElementById("grafico-suicidio");
if (ctx1) {
  new Chart(ctx1, {
    type: "line",
    data: {
      labels: ["2000", "2005", "2010", "2015", "2021"],
      datasets: [{
        label: "Taxa global (por 100 mil hab.)",
        data: [13.7, 12.5, 11.4, 10.2, 8.9],
        borderColor: "#0077ff",
        backgroundColor: "rgba(0,119,255,0.2)",
        borderWidth: 3,
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      plugins: {
        title: { display: true, text: "Evolução global das taxas de suicídio (OMS 2000–2021)" }
      }
    }
  });
}

// 2️⃣ Comparativo entre regiões (2021)
const ctx2 = document.getElementById("grafico-regioes");
if (ctx2) {
  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["África", "Américas", "Sudeste Asiático", "Europa", "Mediterrâneo Oriental", "Pacífico Ocidental"],
      datasets: [{
        data: [11.5, 9.2, 10.1, 10.1, 4.0, 7.5],
        backgroundColor: "#0077ff"
      }]
    },
    options: {
      plugins: {
        title: { display: true, text: "Taxas por região (OMS, 2021)" }
      },
      scales: { y: { beginAtZero: true } }
    }
  });
}

// 3️⃣ Comparativo por gênero (2021)
const ctx3 = document.getElementById("grafico-genero");
if (ctx3) {
  new Chart(ctx3, {
    type: "bar",
    data: {
      labels: ["Homens", "Mulheres"],
      datasets: [{
        data: [12.3, 5.6],
        backgroundColor: ["#004b8d", "#ffb3c6"]
      }]
    },
    options: {
      plugins: {
        title: { display: true, text: "Diferença de taxas de suicídio por gênero (OMS, 2021)" },
        legend: { display: false }
      },
      scales: { y: { beginAtZero: true } }
    }
  });
}

// 4️⃣ Gráfico do Brasil (2021)
const ctxBrasil = document.getElementById("grafico-brasil");
if (ctxBrasil) {
  new Chart(ctxBrasil, {
    type: "bar",
    data: {
      labels: ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"],
      datasets: [{
        label: "Taxa por 100 mil hab. (2021)",
        data: [6.97, 6.54, 8.34, 7.82, 11.22],
        backgroundColor: "#0077ff"
      }]
    },
    options: {
      plugins: {
        title: { display: true, text: "Taxas de suicídio por região – Brasil (Ministério da Saúde, 2021)" }
      },
      scales: { y: { beginAtZero: true } }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Site atualizado com dados OMS 2025 e MS 2024 carregado com sucesso!");
});
