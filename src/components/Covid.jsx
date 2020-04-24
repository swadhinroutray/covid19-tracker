import React, { Component } from 'react'
import '../views/Covid.css'
import Chart from './Chart';

export class Covid extends Component {
       constructor(props){
           super(props)
           this.state={

           }
           
       }
    render() {
        
        return (
            <div>
             <h2 className ='headerCountry'>Details for: {this.props.country || 'India'}</h2>

            <div className = 'main-wrapper'>

                <div className ='Confirmed'>
                <h2 className = 'fontSize'>Confirmed number of cases: {this.props.confirmed} </h2> 
                </div>
                <div className ='Deaths'>
                <h2 className = 'fontSize'>Confirmed number of deaths: {this.props.dead}</h2>
                </div>
            
                <div className ='Recovered'>
                <h2 className = 'fontSize'>Confirmed number of recovered patients: {this.props.recovered}</h2>
                </div>
               
            </div>
            
            <br />
            <div>
            <Chart
                dead = {this.props.dead}   
                recovered = {this.props.recovered} 
                confirmed = {this.props.confirmed}
            />
            </div>
            
            <h4 className ='update'>Last Updated at: {this.props.updatedAt}</h4>
            <div>
                 <footer id= 'footer'>   &copy;	Swadhin Routray</footer>
                
                        
                 </div>
            </div>
        )
    }
}

export default Covid
