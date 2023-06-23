import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Platform from "../Platform/Platform";

const WatchList = () => {
  const [movies, setMovies] = useState([]);
  const [moviesIds, setMoviesIds] = useState([]);

  const handleIdsChange = () => {
    const tempIds = [];

    for (var i = 0; i < localStorage.length; i++) {
      tempIds.push(localStorage.key(i));
    }

    if (tempIds.length > 0 && moviesIds.length !== tempIds.length) {
      setMoviesIds(tempIds);
    }
  };

  const handleFetchMovies = async () => {
    const tempMovies = [];
    for (var i = 0; i < localStorage.length; i++) {
      const id = localStorage.key(i);
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=32fba61adda7634622096950aa45f404&language=en-CA`
      );
      const movie = await response.json();
      tempMovies.push(movie);
    }
    if (tempMovies.length > 0 && movies.length !== tempMovies.length) {
      setMovies(tempMovies);
    }
  };

  useEffect(() => {
    handleIdsChange();
    handleFetchMovies();
  }, [movies, moviesIds]);
  
  window.addEventListener("storage", () => {
    handleIdsChange();
  });

  return ( 
    <Layout>
      <Platform title="My Watch List" movies={movies} />
    </Layout>
   );
}
 
export default WatchList;