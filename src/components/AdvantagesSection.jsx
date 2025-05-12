// AdvantagesSection.jsx
import React from 'react';
import icon1 from '../assets/icons8-target-50.png';
import icon2 from '../assets/icons8-target-32.png';
import icon3 from '../assets/icons8-users-24.png';
import icon4 from '../assets/icons8-cloche-53.png';

const AdvantagesSection = () => {
  return (
    <section id="benefices" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Les avantages à rejoindre l'ARMLC</h2>
        <p className="text-lg md:text-xl mb-8 text-center font-semibold">
          Rejoindre l'ARMLC, c'est bénéficier d'une couverture adaptée, de conseils pratiques 
          <br />
          <span >et d'un réseau engagé.</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex p-4 justify-center items-center gap-4">
           <div className="border-4 border-yellow-600 p-2 rounded-full w-fit">
           <div className="border-2 border-yellow-600 p-2 rounded-full w-fit bg-cover bg-center" style={{ backgroundImage: `url(${icon1})` }}>
            <div className="w-8 h-8" />
           </div>
           </div>
          <div>
            <strong className="text-base md:text-lg font-bold">Assurance multirisque collective</strong>
            
            <p className='text-sm md:text-lg'>Spécialement conçue pour les lieux de 
              <br />
              <span> culte musulmans</span>
            </p>
            </div>
          </div>
          <div className="flex p-4 justify-center items-center gap-4">
           <div className="border-4 border-yellow-600 p-2 rounded-full w-fit">
           <div className="border-2 border-yellow-600 p-2 rounded-full w-fit bg-cover bg-center" style={{ backgroundImage: `url(${icon3})` }}>
            <div className="w-8 h-8" />
           </div>
           </div>
           <div>
            <strong className="text-base md:text-lg font-bold">Accès à des ressources pratiques</strong>
            
            <p className='text-sm md:text-lg'>Guide, vidéos, modèles utiles au quotidien
              <br />
              <span> </span>
            </p>
            </div>
          </div>
          <div className="flex p-4 justify-center items-center gap-4">
           <div className="border-4 border-yellow-600 p-2 rounded-full w-fit">
           <div className="border-2 border-yellow-600 p-2 rounded-full w-fit bg-cover bg-center" style={{ backgroundImage: `url(${icon2})` }}>
            <div className="w-8 h-8" />
           </div>
           </div>
           <div>
            <strong className="text-base md:text-lg font-bold">Réseau d'entraide entre responsables</strong>
            
            <p className='text-sm md:text-lg'>Échangez entre pairs, partagez vos 
              <br />
              <span> expériences</span>
            </p>
            </div>
          </div>
          <div className="flex p-4 justify-center items-center gap-4">
           <div className="border-4 border-yellow-600 p-2 rounded-full w-fit">
           <div className="border-2 border-yellow-600 p-2 rounded-full w-fit bg-cover bg-center" style={{ backgroundImage: `url(${icon4})` }}>
            <div className="w-8 h-8" />
           </div>
           </div>
           <div>
            <strong className="text-base md:text-lg font-bold">Réseau d'entraide entre responsables</strong>
            
            <p className='text-sm md:text-lg'>Sécurité, Obligations légales, conseils
              <br />
              <span> sur mesure</span>
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;