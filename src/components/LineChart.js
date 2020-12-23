import React ,{useState ,useEffect  }from 'react';
import { Line } from "react-chartjs-2";

import axios from "axios";

function LineChart(props) {
    const[post,setPost] = useState([]);
    var[label,setLable] =useState([]);
    var[labelData,setLabelData] = useState([]);
    useEffect(() => {
        axios.get('https://5fe2dd2b7a94870017682a5e.mockapi.io/pages')
        .then(res =>{
            console.log(res.data[0])
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
     
    setLable = post.map(post=> post.pages)
    setLabelData =  post.map(post=> post.navigation)
    console.log(setLable)
    console.log(setLabelData)

    const data={
        labels: setLable,
        datasets:[
            {
                label:'pages navigation',
                data:setLabelData,
                borderColor:['rgba(255, 7, 0,1)'],
                backgroundColor:['rgba(255, 7, 0,1)'],
                pointBackgroundColor:'rgba(255, 7, 0,1)',
                pointBorderColor:'rgba(255, 7, 0,1)'
            }
        ]
    }

    const options={
        title:{
            display:true,
            text:'Linear Chart'
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:12,
                        stepSize:1
                    }
                }
            ]
        }

    }
    return <Line data={data} options={options}/>
}

export default LineChart;