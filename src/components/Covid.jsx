import React, { Component } from 'react'
import '../views/Covid.css'
export class Covid extends Component {
        constructor(props){
            super(props)
            this.state = {
                country:null,
                dead:null,
                recovered:null,
                confirmed:null
            }
            this.getDetails = this.getDetails.bind(this);
        }
        componentDidMount() {
            this.getDetails();
          }
        async getDetails(country){
            console.log('hell')
            const url = 'https://covid19.mathdro.id/api/countries';
            const response  = await fetch(url+'/'+country);
            const data  = await response.json();
            
            console.log(data)
            this.setState({
                country:country,
                dead:data.deaths.value,
                recovered:data.recovered.value,
                confirmed:data.confirmed.value
            })
        }
    render() {
        this.getDetails('USA')
        return (
            <div className = 'main-wrapper'>
                <div className ='Confirmed'>
                <h1>Confirmed number of cases in {this.state.country}: {this.state.confirmed} </h1> 
                </div>
                <div className ='Deaths'>
                <h1>Confirmed number of deaths in {this.state.country}: {this.state.dead}</h1>
                </div>
            
                <div className ='Recovered'>
                <h1>Confirmed number of recovered patients in {this.state.country}: {this.state.recovered}</h1>
                </div>
            </div>
        )
    }
}

export default Covid
