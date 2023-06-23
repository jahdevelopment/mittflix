import Movie from "../Movie/Movie";

const Platform = ({ title, movies }) => {
  return (
    <>
      <div className="titleList">
        <div className="title">
          <h1>{title}</h1>
          <div className="titles-wrapper">
            {movies.length
              ? movies.map((movie) => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.name}
                    rating={movie.vote_average}
                    plot={movie.overview}
                    image={movie.poster_path}
                  />
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Platform;
