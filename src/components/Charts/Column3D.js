import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Column3D = ({ data }) => {
  const chartConfigs = {
    type: "column3d",
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
        caption: "Most Popular",
        // theme: "Fusion",
        xAxisName: "Repos",
        yAxisName: "Stars",
        xAxisNameFontSize: "16px",
        yAxisNameFontSize: "16px",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Column3D;
