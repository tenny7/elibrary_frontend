import React from 'react'


export default class Dashboard extends React.Component {
    

    
    render() {

        if (this.props.user){
            return (
                <h2>Hi {this.props.user.username}</h2>
            )
        }
        return (
            <div className="container">
                <h1>User not Logged in</h1>
            </div>
        )
    }
}