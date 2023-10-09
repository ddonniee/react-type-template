import React from "react";
import { Bar, Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement, //요기
  LineElement,
  Title,
  Tooltip,
  Legend,
  // annotationPlugin
);

interface MyChartProps {
  data: {
    labels: string[],
    datasets: {
      label: string;
      data: number[];
      backgroundColor?:string;
      borderColor?:string;
      fill?:boolean;
    }[];
  }
  options: any;
}
const MyChart:React.FC<MyChartProps>=({data, options})=>{

  console.log(data)
  console.log(options)
    return(
    <Line 
    datasetIdKey='id'
    data={data}
    options={options}
    />
    )
}

export default MyChart