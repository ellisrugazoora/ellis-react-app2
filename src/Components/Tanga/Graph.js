
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AgChartsReact } from 'ag-charts-react';
import Data from './Data';

// Chart Component
const Graph = () => {
  // Chart Options: Control & configure the chart
  const [chartOptions, setChartOptions] = useState({
    // Data: Data to be displayed in the chart
    data: Data,
    // Series: Defines which chart type and data to use
    series: [ //This is pertinent to a single column
      {
          type: 'bar',
          xKey: 'quarter',
          yKey: 'iphone',
          yName: '4T',
          stacked: true,
      },
      {
          type: 'bar',
          xKey: 'quarter',
          yKey: 'mac',
          yName: '2T',
          stacked: true,
      },
      {
          type: 'bar',
          xKey: 'quarter',
          yKey: 'ipad',
          yName: 'Sentry',
          stacked: true,
      },
      {
          type: 'bar',
          xKey: 'quarter',
          yKey: 'wearables',
          yName: 'Duramax HD',
          stacked: true,
      },
      {
          type: 'bar',
          xKey: 'quarter',
          yKey: 'services',
          yName: 'Total',
          stacked: true,
      },
  ],
  });

  return (
    // AgCharsReact component with options passed as prop
    <AgChartsReact options={chartOptions} />
  );
}

export default Graph;