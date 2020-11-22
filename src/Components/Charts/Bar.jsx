import React from "react";
import Chart from "react-apexcharts";

const Bar = () => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
        rangeBarOverlap: false,
        rangeBarGroupRows: true,
      },
    },
    colors: ["#5D78FF", "#BDCAFF"],
    fill: {
      colors: ["#5D78FF", "#BDCAFF"],
    },
    xaxis: {
      type: "category",
      categories: [],
      labels: {
        show: false,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,
        style: {
          colors: [],
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
      axisTicks: {
        show: false,
        borderType: "solid",
        color: "#78909C",
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },
    },
  };

  const series = [
    {
      name: "Author",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "Customer",
      data: [20, 10, 65, 30, 19, 50, 10, 51],
    },
  ];

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="400"
      />
    </div>
  );
};

export default Bar;
