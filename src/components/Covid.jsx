import React, { Component } from 'react'
import '../views/Covid.css'
export class Covid extends Component {
       
    render() {
        
        return (
            <div>
             <h2 className ='headerCountry'>Details for: {this.props.country || 'India'}</h2>

            <div className = 'main-wrapper'>

                <div className ='Confirmed'>
                <h4>Confirmed number of cases in {this.props.country}: {this.props.confirmed} </h4> 
                </div>
                <div className ='Deaths'>
                <h4>Confirmed number of deaths in {this.props.country}: {this.props.dead}</h4>
                </div>
            
                <div className ='Recovered'>
                <h4>Confirmed number of recovered patients in {this.props.country}: {this.props.recovered}</h4>
                </div>
               
            </div>
            <h4 className ='update'>Last Updated at: {this.props.updatedAt}</h4>
            </div>
        )
    }
}

export default Covid
