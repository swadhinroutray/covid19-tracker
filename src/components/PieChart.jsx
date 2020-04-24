import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import '../views/PieChart.css'
export class PieChart extends Component {
    constructor(props){
        super(props)
        //console.log(this.props)
        // var info =[this.props.confirmed , this.props.dead , this.props.recovered];
        // console.log(info)
        this.state = {
            chartData : {}
        }
        // this.makeChart = this.makeChart.bind(this);
       
    }
    componentDidMount() {
      
        console.log(this.props)
        var info =[this.props.confirmed , this.props.dead , this.props.recovered];
        var ChData =  {
            labels: ['Confirmed',
            'Deaths',
            'Recovered'],
            datasets:[{
                label: ['Confirmed','Deaths','Recovered'],
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
            {/* <div className = 'chartHeader'>
            <h3>Breakdown of Number of Cases</h3>
            </div>
            */}
            {/* {this.makeChart} */}
            <Bar
            className='chart'
                data ={ this.state.chartData
                    // labels:this.state.labels,
                    // datasets:this.state.datasets
                }
                options={{
                    maintainAspectRatio:true,
                    title:{
                    display:true,
                    text:'Case Breakdown',
                    fontSize: 20
                    },
                   
                }}
            />


                <br/>
            </div>
        )
    }
}

export default PieChart
