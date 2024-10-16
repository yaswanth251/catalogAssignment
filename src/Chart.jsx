import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const ChartComponent = () => {
  const [chartData] = useState({
    labels: Array.from({ length: 40 }, (_, i) => `Label ${i + 1}`),
    datasets: [
      {
        label: "Dataset 1",
        data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 10000 + 60000)),
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1.4,
        pointRadius: 0,
        pointHoverRadius: 5, 
      },
    ],
  });

  const lastDataPoint = chartData.datasets[0].data[chartData.datasets[0].data.length - 1]; // Last Y-value
  const maxDataPoint = Math.max(...chartData.datasets[0].data); // Maximum Y-value

  const options = {
    scales: {
      x: {
        type: "category",
        grid: {
          color: "rgba(0,0,0,0.0)",
        },
        ticks: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          color: "white", // Light grid color
        },
        ticks: {
          display: false, // Hide Y-axis labels
        },
      },
    },
    elements: {
      line: {
        tension: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `Value: ${tooltipItem.raw}`;
          },
        },
      },
    },
    hover: {
      mode: 'nearest',
      intersect: false,
      onHover: function (e, elements) {
        if (elements.length) {
          e.native.target.style.cursor = 'pointer';
        } else {
          e.native.target.style.cursor = 'default';
        }
      },
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", top: "3rem", left: "-7rem" }}>
      {/* The Chart */}
      <div style={{ width: "35rem" }}>
        <Line data={chartData} options={options} />
      </div>
      
      {/* Display the last point coordinates and max Y value */}
      <div style={{ position: "absolute", fontSize: "16px", fontWeight: "bold", color: "black", borderRadius: ".4rem", padding: ".2rem", left: "42rem" ,top:"7.8rem",width:"max-content"}}>
        <p style={{color:"white",borderRadius:".3rem",marginLeft:"-1.5rem",marginTop:"-4.8rem",padding:".3rem",backgroundColor:"black"}}>{maxDataPoint}</p>

        <p style={{marginTop:"7rem",backgroundColor:"blue",color:"white",padding:".3rem",marginLeft:"-1rem",borderRadius:".3rem"}}>{lastDataPoint}</p>
      </div>
    </div>
  );
};

export default ChartComponent;
