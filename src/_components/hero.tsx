import React from "react";
import placeholder from '../_assets/bg_avengers.jpg';

const Hero = () => (
    <header className="min-h-screen">
        <img className="object-cover object-center h-full w-full" src={placeholder} alt='Filme em destaque' />
    </header>
);

export default Hero;