import React from 'react'
import {Redirect} from 'react-router-dom'

export default class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        localStorage.clear()  
    }

    render() {
        return <Redirect to="/loginForm" />
    }
}