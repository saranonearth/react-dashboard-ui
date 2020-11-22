import React from "react";
import Chart from "react-apexcharts";
const Area = () => {
  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 20, 100],
    },
  ];

  const options = {
    dataLabels: {
      enabled: false,
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="area"
        width="100%"
        height="160"
      />
    </div>
  );
};

export default Area;
