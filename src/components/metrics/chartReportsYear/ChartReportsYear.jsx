import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar componentes necessários
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "Relatos",
      data: [25000, 22000, 18000, 30000, 12000, 24000],
      backgroundColor: [
        "rgba(142, 150, 255, 0.6)",
        "rgba(120, 200, 255, 0.6)",
        "rgba(0, 0, 0, 0.9)", // Preto destacado
        "rgba(120, 180, 255, 0.6)",
        "rgba(180, 220, 255, 0.6)",
        "rgba(120, 220, 180, 0.6)",
      ],
      borderRadius: 8, // Deixa as barras arredondadas
      barThickness: 40, // Define a largura das barras
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Remove legenda para um visual mais clean
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      titleColor: "#fff",
      bodyColor: "#fff",
      borderRadius: 6,
      padding: 10,
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Remove linhas do grid horizontal
      },
      ticks: {
        color: "#666",
        font: {
          size: 14,
          family: "Arial, sans-serif",
        },
      },
    },
    y: {
      grid: {
        color: "rgba(200, 200, 200, 0.3)", // Grid bem suave
      },
      ticks: {
        color: "#666",
        font: {
          size: 12,
          family: "Arial, sans-serif",
        },
        callback: (value) => value / 1000 + "K", // Exibir valores em "K"
      },
    },
  },
};

const MinimalistBarChart = () => {
  return <Bar data={data} options={options} style={{ height: "300px" }} />;
};

export default MinimalistBarChart;
