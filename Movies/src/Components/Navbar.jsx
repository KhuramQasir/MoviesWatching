import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md ">
      <div className="flex text-4xl font-hand  text-gray-700"><img src="src\images\Mask group.png" alt="img" className="h-9" />&nbsp; Movies</div>
      <ul className="flex space-x-8 text-lg text-gray-700">
        <li>
          <Link to="/" className="hover:text-pink-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/explore" className="hover:text-pink-600">
            Explore
          </Link>
        </li>
        <li>
          <Link to="/genre" className="hover:text-pink-600">
            Genre
          </Link>
        </li>
        <li>
          <Link to="/movies" className="hover:text-pink-600">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/tvshows" className="hover:text-pink-600">
            TV Shows
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
