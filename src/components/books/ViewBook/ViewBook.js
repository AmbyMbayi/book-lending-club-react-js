import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getBook, deleteBook } from '../../../actions/books'
import { Link } from 'react-router-dom'

import "./viewBook.css";

export class ViewBook extends Component {
    componentDidMount() {
        const { id } = this.props.match.params
        //this.props.getBook(id)
    }

    render() {
        const { book, history, match: { params: { id } } } = this.props

        return (
            <div>
                <h2>Members</h2>
                <div>
                    <Link to={`/books/edit/${id}`}><button>Edit</button></Link>
                </div>
                <div>
                    <button onClick={() => {
                        //eslint-disable-next-line
                        if (confirm("Are you sure you want to delete this book?")) {
                            this.props.deleteBook(id);
                            history.push("/books")
                        }
                    }}>Delete</button>
                </div>
                <span>
                    {
                        book ? (book.title) : null
                    }
                </span>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    book: state.books.book,

})

export default connect(mapStateToProps, { getBook, deleteBook })(ViewBook)
