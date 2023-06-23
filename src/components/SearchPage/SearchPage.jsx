import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";
import Platform from "../Platform/Platform";

const SearchPage = () => {

  const [movies, setMovies] = useState([]);
  const { search } =useLocation();
  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=32fba61adda7634622096950aa45f404&language=en-CA&page=1&query=${search.split("=")[1]}`
    )
    .then((response) => response.json())
    .then((data) => setMovies(data.results));
  });

  return ( 
    <Layout>
      <Platform title="Results" movies={movies} />
    </Layout>
   );
}
 
export default SearchPage;