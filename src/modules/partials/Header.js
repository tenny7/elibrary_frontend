import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component {

    handleLogout = () => {
        localStorage.clear()
        this.props.setUser(null)
    }
    render() {
        
        
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Library</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav d-flex justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link className="nav-link" to="/books">Books</Link>
                        </li>
                        
                        { !this.props.user ? 
                        <>
                            
                            <li class="nav-item">
                            <Link className="nav-link" to="/loginForm">Login</Link>
                            </li>
                            <li class="nav-item ">
                                <Link className="nav-link" to="/registerForm">Register</Link>
                            </li>
                        </>
                        : 
                        <>
                            <li class="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/add">Add Book</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" onClick={this.handleLogout} to="/">Logout</Link>
                            </li>
                        </>
                        }
                        
                       
                        
                         
                         
                         
                         
                        
                     
                         
                        
                        
                        
                    </ul>
                    </div>
                </div>
                </nav>
       
           
        )
    }
}