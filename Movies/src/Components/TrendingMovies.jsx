import React from 'react';

const TrendingMovies = () => {
  const movies = [
    { title: 'Guardians of the Galaxy', year: '2023', runtime: '104m' },
    { title: 'Shazam! Fury of the Gods', year: '2023', runtime: '104m' },
    { title: 'Dungeons & Dragons', year: '2023', runtime: '104m' },
    { title: 'Medellin', year: '2023', runtime: '104m' },
    { title: 'John Wick: Chapter 4', year: '2023', runtime: '104m' },
    { title: 'Spider-Man: Across the Spider-Verse', year: '2023', runtime: '104m' },
    { title: 'Tyler Perry\'s Sistas', year: '2023', runtime: '104m' },
    { title: 'The Cube', year: '2023', runtime: '104m' },
    { title: 'Nancy Drew', year: '2023', runtime: '104m' },
    { title: 'Rich in Love 2', year: '2023', runtime: '104m' },
    { title: 'The Black Demon', year: '2023', runtime: '104m' },
    { title: 'The Prank Panel', year: '2023', runtime: '104m' },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Trending</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-40 bg-gray-600 flex items-center justify-center">
              {/* Placeholder for Movie Poster */}
              <span className="text-lg font-semibold">Poster</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-sm text-gray-400">
                {movie.year} • {movie.runtime}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
