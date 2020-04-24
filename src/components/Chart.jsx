import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import '../views/Chart.css'
export class Chart extends Component {
    constructor(props){
        super(props)
        this.state = {
            chartData : {}
        }
       
    }
    componentDidMount() {
      
        console.log(this.props)
        var info =[this.props.confirmed , this.props.dead , this.props.recovered];
        var ChData =  {
            labels: ['Confirmed',
            'Deaths',
            'Recovered'],
            datasets:[{
                //label: ['Confirmed','Deaths','Recovered'],
                data:[...info],
                backgroundColor:[
                    'rgba(173, 216, 230, 1)',
                    'rgba(240, 128, 128, 1)',
                    'rgba(144, 238, 144, 1)'
                ]
            }],
            
        }
        this.setState({chartData: ChData})
    }
    
    render() {
        console.log(this.props)
        return (
            <div className ='PieChartWrapper'>
            <Bar
            className='chart'
                data ={ this.state.chartData  }
                options={{
                    maintainAspectRatio:true,
                    title:{
                    display:true,
                    text:'Case Breakdown',
                    fontSize: 20
                    },
                   legend:{
                       display:false
                   }
                }}
                width={550}
                height={150}
            />


                <br/>
            </div>
        )
    }
}

export default Chart
