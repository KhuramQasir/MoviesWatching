import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Genre from './Pages/Genre';
import Movies from './Pages/Movies';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/movies" element={<Movies />} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
