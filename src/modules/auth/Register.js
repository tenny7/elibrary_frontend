import React from 'react'
import axios from 'axios'

export default class Register extends React.Component {
    constructor(props) {
        super(props);this.state = {
            username: '',
            password: ''
        }
        
       this.handleInput = this.handleInput.bind(this)
   }

   handleInput(event) {
       this.setState({
           [event.target.name]: event.target.value
       })
   }

   handleSubmit = (event) => {
       event.preventDefault()

       const url = `http://localhost:5000/register`
       
       const headers = {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
       }

       const data = {
               username: this.state.username,
               password: this.state.password    
       }
       
       axios.post(url,data,{headers})
       .then((res) => {
           this.props.history.push('/loginForm')
       }).catch((error) => {
           console.log(error)
       })   
   }
    render() {
        return (
            <div className="container">
                <h1 className="mt-5">Register</h1>
                <div className="row">
                    <div className="col-6 col-offset-3">
                        <form onSubmit={e => this.handleSubmit(e)}>
                            <div className="input-group-mb-3">
                                <input  type="text"  
                                        className="form-control" 
                                        name="username" 
                                        value={this.state.username}
                                        onChange={e => this.handleInput(e)}
                                        placeholder="Username" 
                                        required/>
                            </div>
                            <br/>
                            <div className="input-group-mb-3">
                                <input  type="password"  
                                        className="form-control" 
                                        name="password" 
                                        value={this.state.password}
                                        onChange={e => this.handleInput(e)}
                                        placeholder="Password" 
                                        required/>
                            </div>
                            <br/>
                            <div className="input-group-mb-3">
                                <button type="submit"  className="btn btn-primary"> Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}