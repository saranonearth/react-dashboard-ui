import React from "react";
import Chart from "react-apexcharts";

const options = {
  labels: ["HTML", "CSS", "Angular"],
  fill: {
    colors: ["#5D78FF", "#AFB4D4", "#545E99"],
  },
  colors: ["#5D78FF", "#AFB4D4", "#545E99"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: ["totla"],
          value: [25],
        },
      },
    },
  },
  legend: {
    position: "left",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
          position: "bottom",
        },
      },
    },
  ],
};

const series = [25, 45, 35];

const Donut = () => {
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="100%"
        height="160"
      />
    </div>
  );
};

export default Donut;
