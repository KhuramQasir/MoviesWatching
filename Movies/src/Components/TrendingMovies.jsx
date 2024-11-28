import React, { useEffect, useState } from "react";

function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?s=Batman&apikey=3607774a&page=1"
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          throw new Error(data.Error);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="w-[95%] mx-auto p-5">
      <div className="flex items-center gap-2 mb-8">
        <img src="src\images\fire.png" alt="" />
        <h1 className="text-2xl font-bold">Trending</h1>
        <img src="src/images/Vector 2.png" alt="" className="h-[2px] w-[82%]" />
        <a href="#" className="text-blue-500 underline">
          SeeMore
        </a>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-5 gap-5">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              className=" rounded-lg p-4 text-center w-48"
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full rounded-lg"
              />
              <h3 className="text-lg font-medium my-2 truncate whitespace-nowrap overflow-hidden">
                {movie.Title}
              </h3>

              <p className="text-gray-500">{movie.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TrendingMovies;
