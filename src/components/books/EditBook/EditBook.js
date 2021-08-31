import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./EditBook.css"
import { Sidebar } from '../../layouts';
import { editBook, getBook } from '../../../actions/books'

export class EditBook extends Component {
    state = {
        title: '',
        description: '',
        copies: ''
    }
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.getBook(id)
    }

    onChange = (e) => {

        //this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        // const { id } = this.props.match.params;
        //const { history } = this.props

        // this.props.editBook(id, bookObject)
        // 
        const { item } = this.state
        this.props.editBook(item)
        this.props.history.push('/adminbooks')
    }


    render() {
        const { book } = this.props
        const { title } = this.state
        //const title = book.title
        console.log("books", book)
        return book ? (
            < div className="page__container">
                <Sidebar />
                <div className="addbook__container">
                    <h2 className="addbook__header">Edit Book </h2>
                    <div className="addbook__page">
                        <div className="addbook__form" >
                            <form action="" onSubmit={this.onSubmit}>
                                <div className="addbook__form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" name="title" value={book.title} onChange={this.onChange} />
                                </div>
                                <div className="addbook__form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea type="text" name="description" value={book.description} onChange={this.onChange}></textarea>
                                </div>
                                <div className="addbook__form-group">
                                    <label htmlFor="copies">copies</label>
                                    <input type="text" name="copies" value={book.copies} onChange={this.onChange} />
                                </div>
                                <button type="submit" className="addbook__button">save</button>
                            </form>
                        </div>
                        <div className="addbook__image">
                            <img src="" alt="book" />
                        </div>
                    </div>
                </div>
            </div >
        ) : null;
    }
}
const mapStateToProps = state => ({
    book: state.books.book
})
export default connect(mapStateToProps, { editBook, getBook })(EditBook)