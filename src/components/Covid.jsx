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
                <h2 className = 'fontSize'>Confirmed number of cases in {this.props.country}: {this.props.confirmed} </h2> 
                </div>
                <div className ='Deaths'>
                <h2 className = 'fontSize'>Confirmed number of deaths in {this.props.country}: {this.props.dead}</h2>
                </div>
            
                <div className ='Recovered'>
                <h2 className = 'fontSize'>Confirmed number of recovered patients in {this.props.country}: {this.props.recovered}</h2>
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
            {/* <StickyFooter
                bottomThreshold={50}
                normalStyles={{
                backgroundColor: "#999999",
                padding: "0vh"
                }}
                stickyStyles={{
                backgroundColor: "rgba(255,255,255,.8)",
                padding: "-2px"
                }}
                > */}
                 
                 <footer id= 'footer'>   &copy;	Swadhin Routray</footer>
                
                        
                 </div>
            </div>
        )
    }
}

export default Covid
