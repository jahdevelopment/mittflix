import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Platform from "../Platform/Platform";

const MainPage = () => {
  const [netflixMovies, setNetflixMovies] = useState([]);
  const [craveMovies, setCraveMovies] = useState([]);
  const [disneyMovies, setDisneyMovies] = useState([]);
  const [appleMovies, setAppleMovies] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=32fba61adda7634622096950aa45f404&language=en-CA&sort_by=popularity.desc&page=1&with_watch_providers=8&watch_region=CA"
      ),
      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=32fba61adda7634622096950aa45f404&language=en-CA&sort_by=popularity.desc&page=1&with_watch_providers=230&watch_region=CA"
      ),
      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=32fba61adda7634622096950aa45f404&language=en-CA&sort_by=popularity.desc&page=1&with_watch_providers=337&watch_region=CA"
      ),
      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=32fba61adda7634622096950aa45f404&language=en-CA&sort_by=popularity.desc&page=1&with_watch_providers=350&watch_region=CA"
      ),
    ]).then(async (responses) => {
      for (let i = 0; i < responses.length; i++) {
        const movies = await responses[i].json();
        if (i === 0) {
          setNetflixMovies(movies.results);
          
        } else if (i === 1) {
          setCraveMovies(movies.results);
        } else if (i === 2) {
          setDisneyMovies(movies.results);
        } else if (i === 3) {
          setAppleMovies(movies.results);
        }
      }
    });
  }, []);

  return (
    <>
      <Layout>
        <Platform title="Netflix" movies={netflixMovies} />
        <Platform title="Crave" movies={craveMovies} />
        <Platform title="Disney" movies={disneyMovies} />
        <Platform title="Apple Plus" movies={appleMovies} />
      </Layout>
    </>
  );
};

export default MainPage;
