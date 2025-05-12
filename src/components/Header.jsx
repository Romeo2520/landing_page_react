// Header.jsx
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href='#accueil' className="mt-8">
            <img src="/logo.svg" alt="ARMLC Logo" className="h-8" />
          </a>
          
          {/* Menu burger pour mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>

          {/* Menu de navigation */}
          <div className="hidden md:flex space-x-6 text-black font-bold mt-8">
            <a href='#engagements'>Nos engagements</a>
            <a href='#risques'>Pourquoi se protéger ?</a>
            <a href='#benefices'>Bénéfices de l'adhésion</a>
            <a href='#newsletter'>Rester informer</a>
          </div>
        </div>

        {/* Menu mobile */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="mt-4">
            <a href='#engagements' className="block px-4 py-2 text-gray-600 hover:text-gray-800">Nos engagements</a>
            <a href='#risques' className="block px-4 py-2 text-gray-600 hover:text-gray-800">Pourquoi se protéger ?</a>
            <a href='#benefices' className="block px-4 py-2 text-gray-600 hover:text-gray-800">Bénéfices de l'adhésion</a>
            <a href='#newsletter' className="block px-4 py-2 text-gray-600 hover:text-gray-800">Rester informer</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;