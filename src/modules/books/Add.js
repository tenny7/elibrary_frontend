import React from 'react'
import axios from 'axios'

export default class Add extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            publishDate: "",
            pages: ""
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInput = (event) => {
	    this.setState({
            [event.target.name] : event.target.value
        })
        
    }

     handleSubmit = (event) => {
        event.preventDefault()

        const url = 'http://localhost:5000/book/create'
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
    
        axios.post(url, JSON.stringify({
            title: this.state.title,
            description: this.state.description,
            publishDate: this.state.publishDate,
            pages: this.state.pages
        }), {headers: headers})
        .then((res) => {
            // this.setState({
            //     title: null,
            //     description: null,
            //     publishDate:null,
            //     pages:null
            // })   
        }) 
    }
    
    render() {
        return (
            <div className="container">
                <h2 className="mt-3">Add book to Library</h2>
                <div className="row mt-3">
                    <div>
                    
                    <form onSubmit={ (e) => this.handleSubmit(e)}>
                        <div className="input-group mb-3">
                            <input  type="text"  
                                    name="title"
                                    className="form-control"
                                    value={this.state.title} 
                                    onChange={e => this.handleInput(e)}
                                    placeholder="Enter title of book"/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                        </div>
                        
                        <div className="input-group mb-3">
                            <textarea 
                                    name="description" 
                                    id="" cols="30" 
                                    rows="10" 
                                    className="form-control" 
                                    onChange={e => this.handleInput(e)}
                                    placeholder="description">
                            </textarea>
                        </div>
                        
                        <div className="input-group mb-3">
                            <input  type="text" 
                                    className="form-control" 
                                    name="publishDate" 
                                    value={this.state.publishDate}
                                    onChange={e => this.handleInput(e)} 
                                    placeholder="Published Date" />
                        </div>
                        
                        <div className="input-group mb-3">
                            <input  type="text" 
                                    className="form-control" 
                                    name="pages" 
                                    value={this.state.pages}
                                    onChange={e => this.handleInput(e)} 
                                    placeholder="Number of pages" />
                        </div>

                        
                        {/* <label for="item">PDF</label>
                        <div className="input-group mb-3">
                            <input  type="file" 
                                    className="form-control" 
                                    name="item" 
                                    value="" 
                                    placeholder="Select a photo" />
                        </div> */}
                        
                        <div className="input-group mb-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}