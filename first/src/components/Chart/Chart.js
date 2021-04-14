import React from 'react'

import ChartBar from './ChartBar/ChartBar';
import './Chart.css';

function Chart({ dataPoints }) {
  const maxDataPointValue = Math.max(...dataPoints?.map((point) => point.value));
  console.log(maxDataPointValue);
  return (
    <ul className='chart'>
      {dataPoints?.map((dataPoint) => (
        <ChartBar 
          key={dataPoint.label}
          label={dataPoint.label} 
          value={dataPoint.value} 
          maxValue={maxDataPointValue}
        />
      ))}
    </ul>
  )
}

export default Chart