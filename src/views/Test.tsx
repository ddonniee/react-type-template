import React from 'react';
import MyChart from '../components/MyChart';

interface dataSet  {
  labels:[],
  dataset : [{
    label:string,
    data:number[];
  }]
}
const Test: React.FC = () => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const data = {
    labels: ['Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
    datasets: [
    {
        id: 1,
        label: 'dataset1',
        data: [5, 6, 7,2,3,1,4],
        backgroundColor:'pink',
        borderColor:'pink',
        fill:true
    },
    {
        id: 2,
        label: 'dataset2',
        data: [3, 2, 1,1,5,9,2],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        fill:true
    },
    ],
  }

  return (
      <section>
          <MyChart data={data} options={options}/>
      </section>
    )
}
export default Test;
