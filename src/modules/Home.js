import React from 'react'
// import axios from 'axios'
import Header from './partials/Header'
import Landing from './partials/Landing'
import './../css/style.css'


export default class Home extends React.Component {

   

    // componentDidMount(){
    //     this.fetch();
    // }

    render () {
        return (
            <div className="body">
                <div className="jumbotron">
                    <Landing/> 
                </div>
                
            </div>
        )
    }
}