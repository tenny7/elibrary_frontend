import React from 'react'

export default class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1 className="mt-5">Register</h1>
                <div className="row">
                    <div className="col-6 col-offset-3">
                        <form action="/register" method="post">
                            <div className="input-group-mb-3">
                                <input  type="text"  
                                        className="form-control" 
                                        name="username" 
                                        value="" 
                                        placeholder="Username" 
                                        required/>
                            </div>
                            <br/>
                            <div className="input-group-mb-3">
                                <input  type="password"  
                                        className="form-control" 
                                        name="password" 
                                        value="" 
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