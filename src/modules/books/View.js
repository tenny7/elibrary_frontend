import React from 'react'
import axios from 'axios'

export default class View extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            description:'',
            books: []
        }
        // this.displayBooks = this.displayBooks.bind(this)
    }

    
    getBooks = (event) => {
        const url = 'http://localhost:5000/books'
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
        axios.get(url)
        .then((res) => {
            console.log(res.data)
            this.setState({
                books: res.data
            })
        })
    }

    // displayBooks = (books) => {
    //     if (!books.length) return null;

        
    //     return books.map( (book) => {
    //         <div>
    //             <h3>{book.title}</h3>
    //             <p>{book.description}</p>
    //         </div>
    //     });   
    // } 

    componentDidMount(){
        this.getBooks();
    }

    render() {
        return (
            <div className="container">
                <h3 className="mt-4">Libray Books</h3>
                <div className="row d-flex justify-content-between mt-3">
                    {this.state.books.map( (book, index) => {
                        return <div class="card" key={index} style={{width:18 + 'rem',}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{book.title}</h5>
                                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                        {/* <p className="card-text">{book.description}</p> */}
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                    })}
                    {/* {this.displayBooks(this.state.books)} */}
                </div>
            </div>
        )
    }
}