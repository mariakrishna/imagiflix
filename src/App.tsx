import React from 'react';

import Hero from './_components/hero'
import NavBar from './_components/NavBar';

const App = () => {
  return (
    <div className="m-auto antialised font-sans bg-black text-white">
      <Hero />
      <NavBar />
    </div>
  );
}

export default App;
