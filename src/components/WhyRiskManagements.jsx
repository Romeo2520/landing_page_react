// WhyRiskManagement.jsx
import React from 'react';
import icon1 from '../assets/icons8-target-50.png';
import icon2 from '../assets/icons8-target-32.png';
import icon3 from '../assets/icons8-users-24.png';
import icon4 from '../assets/icons8-cloche-53.png';

const WhyRiskManagement = () => {
  return (
    <section className="bg-yellow-50 py-8 md:py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-64">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 md:mb-8">Pourquoi parler de sécurité dans les lieux de culte ?</h1>
          <p className="text-sm md:text-lg mb-4 md:mb-8 text-justify">
            Les lieux de culte musulmans, essentiels à la vie spirituelle, sont souvent ouverts et donc exposés à divers risques tels que les incendies, le vandalisme ou les accidents.
          </p>
          <p className="text-sm md:text-lg mb-4 md:mb-8 text-justify">
            Le Risk Management permet d'anticiper, de se préparer, et de protéger ces lieux précieux.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="flex p-2 md:p-4 justify-center items-center gap-2 md:gap-4">
            <div className="border-4 border-yellow-600 p-1 md:p-2 rounded-full w-fit">
              <div className="border-2 border-yellow-600 p-1 md:p-2 rounded-full w-fit bg-cover bg-center" style={{ backgroundImage: `url(${icon1})` }}>
                <div className="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </div>
            <strong className="text-center text-sm md:text-base">Identifier les risques</strong>
          </div>
          <div className="flex p-2 md:p-4 justify-center items-center gap-2 md:gap-4">
            <div className="border-4 border-yellow-600 p-1 md:p-2 rounded-full w-fit">
              <div className="border-2 border-yellow-600 p-1 md:p-2 rounded-full w-fit bg-cover bg-center" style={{ backgroundImage: `url(${icon3})` }}>
                <div className="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </div>
            <strong className="text-center text-sm md:text-base">Former les bénévoles</strong>
          </div>
          <div className="flex p-2 md:p-4 justify-center items-center gap-2 md:gap-4">
            <div className="border-4 border-yellow-600 p-1 md:p-2 rounded-full w-fit">
              <div className="border-2 border-yellow-600 p-1 md:p-2 rounded-full w-fit bg-cover bg-center" style={{ backgroundImage: `url(${icon2})` }}>
                <div className="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </div>
            <strong className="text-center text-sm md:text-base">Agir en prévention</strong>
          </div>
          <div className="flex p-2 md:p-4 justify-center items-center gap-2 md:gap-4">
            <div className="border-4 border-yellow-600 p-1 md:p-2 rounded-full w-fit">
              <div className="border-2 border-yellow-600 p-1 md:p-2 rounded-full w-fit bg-cover bg-center" style={{ backgroundImage: `url(${icon4})` }}>
                <div className="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </div>
            <strong className="text-center text-sm md:text-base">Réagir efficacement</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRiskManagement;