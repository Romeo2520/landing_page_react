// HeroSection.jsx
import React from 'react';
import mosqueImage from '../assets/Muslim people going to mosque.jpg';

const HeroSection = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
        
        <div className="w-full lg:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-12 md:text-4xl lg:text-6xl">Ensemble, protégeons nos lieux de culte</h1>
          <p className="text-xl md:text-2xl justify-center lg:text-3xl mb-8 font-normal">
            Notre mission est d’accompagner les lieux de culte musulmans en France dans une démarche proactive de gestion des risques (risk management), afin de garantir la sécurité des fidèles, la protection des biens et la continuité des activités culturelles.
          </p>
        </div>

        <div className=" w-full lg:w-1/2">  
          <img
            src={mosqueImage}
            alt="Illustration ARMLC"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;