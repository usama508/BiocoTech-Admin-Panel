import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

function Chart() {
  ChartJS.register(ArcElement);

const data = {
  
  datasets: [
    {
      
      data: [40, 20, 40],
      backgroundColor: ["rgb(132, 204 ,22)","rgb(8 145 178)",'rgb(156 163 175)'],
      borderWidth:1,
      cutout:'80%',
      borderRadius:20,
     

      },
     
  ],
  
},
options= {
  plugins: {
    datalabels: {
      formatter: (value) => {
        return value + '%';
      },
    },
  },
}



  return (
    <div>
       <Doughnut
                data={data}
                options={options}
                
                className=" "
               
              />
    </div>
  )
}

export default Chart