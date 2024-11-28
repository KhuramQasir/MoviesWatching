import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center px-8 py-16 bg-gray-100">
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl font-extrabold font-bebas">
          FIND MOVIES <br />
          <span className="text-6xl text-gradient">TV SHOWS AND MORE</span>
        </h1>
        <p className="mt-5 text-gray-600 font-inter text-sm">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
        <button className="flex mt-8 px-2 py-2 border-2 border-gray-600 text-black bg-opacity-0 rounded-lg hover:bg-pink-500"> <img src="src\images\Play.png" alt="img" className='h-7'/>
        &nbsp; Watch Tutorial
        </button>
      </div>

    
  <div className="relative w-44 h-96">
  
  <img
    src="src\images\Galaxy.png"
    alt="Guardians of the Galaxy"
    className="absolute   w-full h-auto rounded-lg right-9"
  />


  <img
    src="src/images/Spiderman.png"
    alt="Spider-Man: Across the Spider-Verse"
    className="absolute w-full h-auto rounded-lg shadow-lg right-24 top-12 "
  />
  
</div>


    </div>
    
  );
};

export default HeroSection;
