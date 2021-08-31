import { Link } from "react-router-dom";
import bookCover from "../../../images/bookCover.jpg";
import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div className="side__navbar">
      <img src={bookCover} alt="" className="side__navbar-image" />

      <div className="side__navbar-book">
        <div
          className="side__navbar-book-image"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${bookCover})`,
          }}
        ></div>
        <div className="side__navbar-book-details">
          <h2>The Educated</h2>
          <p>Action Thriller</p>
        </div>
      </div>
      <div className="side__navbar-book">
        <div
          className="side__navbar-book-image"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${bookCover})`,
          }}
        ></div>
        <div className="side__navbar-book-details">
          <h2>The Educated</h2>
          <p>Action Thriller</p>
        </div>
      </div>
      <Link className="side__navbar-button">All New Books </Link>
      <div className="side__navbar-blog">
        <h2>Blog Categories</h2>
        <p>Economics</p>
        <p>Technology</p>
        <p>History</p>
      </div>
    </div>
  );
};

export default Sidenav;
