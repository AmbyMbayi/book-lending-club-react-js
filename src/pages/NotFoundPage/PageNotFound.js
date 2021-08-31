import { Link } from "react-router-dom";
import "./PageNotFound.css";
import { ReactComponent as NotFound } from "../../components/icons/notFound.svg"

const PageNotFound = () => {
  return (
    <div className="pagenotfound__container">


      <div className="notfound__info">
        <h2 className="oops">OOPS!</h2>
        <p>You lost in space</p>
        <Link to="/" className="home__button">Go Home</Link>
      </div>
      <div className="notfound__image">
        <NotFound className="notfound__icon" />
      </div>


    </div>
  );
};

export default PageNotFound;
