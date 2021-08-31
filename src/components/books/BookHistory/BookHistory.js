import React from 'react';
import { Sidenav } from '../../layouts';
import bookOne from "../../../images/book-1.jpg";

import { Link } from 'react-router-dom'
import "./BookHistory.css";

function BookHistory(props) {
    return (
        <div className="body__container">
            <Sidenav />

            <div className="book__history-page">
                <h2 className="book__history__title">Log into your account</h2>
                <div className="book__history">
                    <div className="book__history__content">
                        <div className="book__history__book">
                            <div
                                className="book__history-image"
                                style={{
                                    backgroundSize: "cover",
                                    backgroundPosition: "center center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundImage: `url(${bookOne})`,
                                }}
                            ></div>

                            <div className="history__book-info">
                                <p>The Educated</p>
                                <p>Sci-fi and fantasy</p>
                            </div>
                            <div>
                                <button type="button" className="book__returned">Returned</button>
                                <p>Due date:03-03-2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="book__history__content">
                        <div className="book__history__book">
                            <div
                                className="book__history-image"
                                style={{
                                    backgroundSize: "cover",
                                    backgroundPosition: "center center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundImage: `url(${bookOne})`,
                                }}
                            ></div>

                            <div className="history__book-info">
                                <p>The Educated</p>
                                <p>Sci-fi and fantasy</p>
                            </div>
                            <div>
                                <button type="button" className="book__not-returned">Not Returned</button>
                                <p>Due date:03-03-2021</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="book__history__links">

                    <Link to="/profile">Back to your account</Link>
                    <Link to="/books">Home</Link>
                </div>
            </div>
        </div>
    );
}

export default BookHistory;