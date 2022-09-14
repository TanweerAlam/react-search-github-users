import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Doughnut2D = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        // caption: "Countries With Most Oil Reserves [2017-18]",
        // subCaption: "In MMbbl = One Million barrels",
        // xAxisName: "Country",
        // yAxisName: "Reserves (MMbbl)",
        // numberSuffix: "K",
        // theme: "fusion",
        caption: "Stars per language",
        // theme: "Fusion",
        decimals: 0,
        doughnutRadius: "45%",
        showPercentValues: 0,
        theme: "candy",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2D;
