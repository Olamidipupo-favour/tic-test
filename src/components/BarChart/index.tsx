import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  // Example sales data
  const salesData = [
    { month: "Jan", value: 80, category: "high" },
    { month: "Feb", value: 60, category: "mid" },
    { month: "Mar", value: 70, category: "mid" },
    { month: "Apr", value: 90, category: "high" },
    { month: "May", value: 50, category: "low" },
    { month: "Jun", value: 40, category: "low" },
    { month: "Jul", value: 30, category: "low" },
    { month: "Aug", value: 85, category: "high" },
    { month: "Sep", value: 60, category: "mid" },
    { month: "Oct", value: 70, category: "mid" },
    { month: "Nov", value: 95, category: "high" },
    { month: "Dec", value: 100, category: "high" },
  ];

  // Map sales categories to colors
  const categoryColors: Record<string, string> = {
    high: "#82006F", // Purple for high sales
    mid: "#F158F9", // Light Purple for mid sales
    low: "#EF5500", // Orange for low sales
  };

  // Extract labels, data values, and bar colors
  const labels = salesData.map((data) => data.month);
  const dataValues = salesData.map((data) => data.value);
  const backgroundColors = salesData.map(
    (data) => categoryColors[data.category]
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: dataValues,
        backgroundColor: backgroundColors,
        borderRadius: 10, // Rounded corners for bars
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const { raw } = tooltipItem;
            return `Sales: ${raw}k`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on X-axis
        },
        ticks: {
          color: "#000", // X-axis labels color
        },
      },
      y: {
        grid: {
          color: "#444444", // Gridline color
        },
        ticks: {
          color: "#000", // Y-axis labels color
        },
        beginAtZero: true,
      },
    },
    barThickness: 20, // Bar width
  };

  return (
    <div className="p-6 bg-[#fff8fe] rounded-3xl shadow-lg text-black font-fontMont w-[1000px] mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">All Services</h2>
        <div className="flex items-center space-x-2">
          <label htmlFor="sort-by" className="text-sm">
            Sort by
          </label>
          <select
            id="sort-by"
            className="bg-none text-sm text-black px-2 py-1 rounded-lg border border-black focus:outline-none"
          >
            <option>Month</option>
            <option>Year</option>
          </select>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-end mb-10">
        <span className="h-3 w-3 bg-[#82006F] rounded-full"></span>
        <span>High Sales</span>
        <span className="h-3 w-3 bg-[#F158F9] rounded-full"></span>
        <span>Mid Sales</span>
        <span className="h-3 w-3 bg-[#EF5500] rounded-full"></span>
        <span>Low Sales</span>
      </div>
      <Bar data={data} options={options} />
      <div className="mt-4 text-lg font-bold flex justify-between">
        <span>Total Revenue</span>
        <span>N200,000,000</span>
      </div>
    </div>
  );
};

export default BarChart;
