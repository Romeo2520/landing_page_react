// App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import WhyRiskManagements from './components/WhyRiskManagements';
import AdvantagesSection from './components/AdvantagesSection';
import StayAlert from './components/StayAlert';
import ValuesSection from './components/ValuesSection';

function App() {
  return (
    
      <div className="min-h-screen flex flex-col">
        <Header />
        {/* <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ValuesSection />
                <WhyRiskManagements />
                <AdvantagesSection />
                <StayAlert />
              </>
            } />
            <Route path="/engagements" element={<HeroSection />} />
            <Route path="/risques" element={<WhyRiskManagements />} />
            <Route path="/benefices" element={<AdvantagesSection />} />
            <Route path="/newsletter" element={<StayAlert />} />
          </Routes>
        </main> */}
         <HeroSection />
          <ValuesSection />
          <WhyRiskManagements />
          <AdvantagesSection />
          <StayAlert />
        <Footer />
      </div>
    
    
  );
}

export default App;