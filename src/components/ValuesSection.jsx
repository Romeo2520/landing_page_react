// ValuesSection.jsx
import Vector1 from '../assets/Vector 1.svg';

const ValuesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-5xl font-bold mb-8 text-yellow-600 text-center">ARMLC</h2>
        <p className="text-sm md:text-2xl mb-20 font-semibold text-center">
          Association du Risk Management des Lieux de Culte
        </p>

        {/* Section 1 avec les deux premières valeurs */}
        <div className="flex flex-row flex-wrap justify-around items-center mb-16">
          <div className="w-1/2 text-center mb-8">
            <h3 className="text-sm md:text-xl font-bold mb-2">Solidarité</h3>
            <p className='text-xs md:text-lg'>Se protéger, c'est aussi 
              <br />protéger les autres</p>
          </div>
          <div className="w-1/2 text-center mb-8">
            <h3 className="text-sm md:text-xl font-bold mb-2">Indépendance</h3>
            <p className='text-xs md:text-lg'>Aucune influence
              <br />commerciale</p>
          </div>
        </div>

        {/* SVG */}
        <div className="mb-16">
          <img src={Vector1} alt="vector" className='w-full '/>
        </div>

        {/* Section 2 avec les trois valeurs */}
        <div className="flex flex-row flex-wrap justify-around items-center">
          <div className="w-1/3 text-center mb-8">
            <h3 className="text-sm md:text-xl font-bold mb-2">Prévention</h3>
            <p className='text-xs md:text-lg'>Anticipez les riques pour <br />mieux les éviter </p>
          </div>
          <div className="w-1/3 text-center mb-8">
            <h3 className="text-sm md:text-xl font-bold mb-2">Transparence</h3>
            <p className='text-xs md:text-lg'>Des actions claires pour <br />des objectifs partagés</p>
          </div>
          <div className="w-1/3 text-center mb-8">
            <h3 className="text-sm md:text-xl font-bold mb-2">Responsabilité</h3>
            <p className='text-xs md:text-lg'>Promouvoir une culture du risque <br />au service du bien commun</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;