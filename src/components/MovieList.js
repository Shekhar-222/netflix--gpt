import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (movies === null) return;
  console.log(movies[0]);

  return (
    <div className="px-2">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-sxroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.key} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
