import React from "react";
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

import { attendedsUsersByMonth } from "../../../../services/metrics";

// Registrar componentes necessários
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const MinimalistLineChart = ({ useUsers }) => {
  const { users } = useUsers();
  const [dataUsers, setDataUsers] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const response = await attendedsUsersByMonth(users);

      setDataUsers(response);
    };

    if (users.length != 0) getData();
  }, [users]);

  const data = {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        label: "Relatos por dia",
        data: dataUsers,
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

  return (
    <div style={{ height: "300px", width: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default MinimalistLineChart;
