import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movie = ({ title, rating, plot, image, id }) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(id)) setValue(true);
  }, [id]);

  const handleClick = (e) => {
    setValue(!value);
    if (!value) {
      localStorage.setItem(id, true);
      window.dispatchEvent(new Event("storage"));
    } else {
      localStorage.removeItem(id);
      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <>
      <div className="movie">
        <Link to={`/details/${id}`}>
          <img 
          src={`https://image.tmdb.org/t/p/w500${image}`} 
          alt={title} />
          <div className="overlay">
            <div className="title">{title}</div>
            <div className="rating">{rating}/10</div>
            <div className="plot">{plot}</div>
          </div>
        </Link>
        <div data-toggled={value} className="listToggle" onClick={handleClick}>
          <div>
            <i className="fa fa-fw fa-plus"></i>
            <i className="fa fa-fw fa-check"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
