// Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-yellow-50 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center ">
        <div>
          <img src="/logo-footer.svg" alt="ARMLC Logo" className="h-8 mb-4 md:mb-0" />
        </div>
        <div className="md:w-1/5">
          <h3 className="text-2xl font-bold mb-2">Ressources</h3>
          <ul className='text-xl mx-auto'>
            <li>MCB Mosque Safety Guide</li>
            <li>On mosque</li>
            <br />

            <li>Risk Assessment Guidance.url</li>
            <br />

            <li>Risk Assessment Simply</li>
            <li>Mosque Insurance</li>
            <br />
            <li>Risk Management Policy</li>
          </ul>
        </div>
        <div className="md:w-1/5">
          <h3 className="text-2xl font-bold mb-2">Contact</h3>
          <br />
          <ul className='text-xl mx-auto'>
            <li>Email 
              <br />
                contact@armlc.fr
              
               </li>
               <br />
            <li>Téléphone
              <br />
               01 00 00 00 00</li>
          </ul>
        </div>
      </div>
      <div className="border-2 border-black mt-8 w-4/5 mx-auto"></div>
      <p className="text-center text-xl font-bold mt-8">ARMLC © 2025 – Association loi 1901</p>
    </footer>
  );
};

export default Footer;