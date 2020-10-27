import React from 'react';
import Chart from 'react-apexcharts';


const options = {
  chart: {
    id: 'line chart',
    type: 'line',
    zoom: {
      autoScaleYaxis: false,
      autoScaleXaxis: false,              
    },
    toolbar: {
      show: false,
    },
  },
  stroke: {
    show: true,
    curve: 'straight',
    width: 1,
  },
  yaxis: {
    title: {
      text: 'Cases',
      style: {
        fontSize:  '14px',
        fontWeight:  'normal',
        color:  '#263238'
      },
    },
    min: 0,
    tickAmount: 6,
    labels: {
      show: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    hover: {
      size: 6,
      sizeOffset: 3
    }
  },
  xaxis: {
    categories: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    title: {
      text: 'Day',
      style: {
        fontSize:  '14px',
        fontWeight:  'normal',
        color:  '#263238'
      },
    }
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy',
    },
  },      
  grid: {
    show: true,
    borderColor: '#d8d8d8',
    strokeDashArray: 0,
    position: 'back',
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
}


const Graph = ({series}) => {
    return ( 
        <div>
            <Chart
            options={options}
            series={series}
            type="line"
            height={320}
            />
            
        </div>
     );
}
 
export default Graph;