import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component {

    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Library</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">

                    <ul class="navbar-nav d-flex justify-content-center">
                        <li class="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/add">Add</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/books">View</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/loginForm">Login</Link>
                        </li>
                        <li class="nav-item ">
                            <Link className="nav-link" to="/registerForm">Register</Link>
                        </li>
                        
                    </ul>
                    </div>
                </div>
                </nav>
       
           
        )
    }
}