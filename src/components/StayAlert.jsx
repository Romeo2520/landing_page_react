// StayAlert.jsx
import React from 'react';

const StayAlert = () => {
  return (
    <section id='newsletter' className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className=" bg-yellow-600 text-black p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Restez informé, même sans adhérer</h2>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-justify">
              Chaque mois, recevez des conseils concrets pour
              <br />
              <span> renforcer la sécurité de vos lieux de culte musulmans,</span>
              <br />
              <span> rester informé des obligations et réglementations en</span>
              <br />
              <span> vigueur, et découvrir les actions menées par l'ARMLC.</span>
            </p>
          </div>
          <div className="text-center">
            <form className='space-y-4'>
              <input
                type="text"
                placeholder="Votre prénom"
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="w-full p-2 border rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700 font-bold"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayAlert;