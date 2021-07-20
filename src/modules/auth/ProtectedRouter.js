import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'


const isAuthenticated = window.localStorage.getItem('token');

const ProtectedRouter = ({ component:Component, ...rest}) => {
    return (
        <Route {...rest} render= {(props) => {
            if (isAuthenticated){
                return <Component {...props} />;
            } else {
                return <Redirect to="/loginForm" />
            }
            
        }}
        />   
    )
}
export default ProtectedRouter
  