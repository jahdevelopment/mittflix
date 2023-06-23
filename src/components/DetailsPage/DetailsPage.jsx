import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(id)) setValue(true);
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=32fba61adda7634622096950aa45f404&language=en-CA`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));
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
    <Layout>
      <div className="show-details">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
        />
        <div className="show-details-inner">
          <h1>{movie.original_name}</h1>
          <div className="description">{movie.overview}</div>
          <button
            className={value ? "remove-to-watchlist" : "add-to-watchlist"}
            onClick={handleClick}
          >
            {value ? "- Remove to watchlist" : "+ Add to watchlist"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default DetailsPage;
