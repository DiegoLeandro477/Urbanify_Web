import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar componentes necessários
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const data = {
  labels: Array.from({ length: 31 }, (_, i) => i + 1), // Dias de 1 a 31
  datasets: [
    {
      label: "Relatos por dia",
      data: [
        500, 200, 150, 250, 300, 220, 170, 400, 320, 100, 180, 300, 250, 270,
        210, 280, 190, 310, 230, 290, 200, 150, 180, 190, 220, 310, 230, 300,
        180, 150, 0,
      ],
      borderColor: "rgba(75, 192, 192, 1)", // Cor da linha
      backgroundColor: "rgba(75, 192, 192, 0.2)", // Área sombreada
      tension: 0.4, // Suavização da curva
      pointRadius: 4, // Tamanho dos pontos
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "top",
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
      ticks: {
        color: "#666",
        font: {
          size: 14,
          family: "Arial, sans-serif",
        },
      },
    },
    y: {
      ticks: {
        color: "#666",
        font: {
          size: 12,
          family: "Arial, sans-serif",
        },
        callback: (value) => value, // Exibe os valores como estão
      },
    },
  },
};

const MinimalistLineChart = () => {
  return (
    <div style={{ height: "300px", width: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default MinimalistLineChart;
