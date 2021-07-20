import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class View extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id:'',
            title: '',
            books: [],
            loggedIn: this.props.loggedIn
        } 
    }
    
    getBooks = (event) => {
        const url = 'http://localhost:5000/books'

        const headers = {
            'Content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
        
        axios.get(url,{headers:headers})
        .then((res) => {
            this.setState({
                books: res.data
            })
        })
    } 

    componentDidMount(){
        this.getBooks();
    }

    render() {
        
        return (
            <div className="container">
                <h3 className="mt-4">List of books</h3>
                <div className="row">
                <div className="d-flex justify-content-between mt-3"  style={{ marginRight: 2}}>
                    {this.state.books.map( (book, index) => {
                        return <div class="card" key={index} style={{width: '200px', marginRight:'5px'}}>
                                    <div className="card-body">
                                        <button className="btn btn-info">Pages: {book.pages}</button>
                                        <h6 className="card-title">{book.title}</h6>
                                        
                                        <div className="d-flex justify-content-between">
                                        { this.props.user ? 
                                        <>
                                        <Link className="btn btn-primary" to={`/edit/${book._id}`}>Edit</Link> 
                                        </>
                                        : 
                                        <>
                                        </>
                                        }
                                       
                                        
                                        </div>       
                                    </div>
                                </div>
                    })}
                    </div>
                </div>
            </div>
        )
    }
}