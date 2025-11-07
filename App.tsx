
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SidePanel from './components/SidePanel';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Mission from './components/Mission';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <div className="max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Side Panel (visible on large screens) */}
          <div className="hidden lg:block lg:col-span-4">
            <SidePanel />
          </div>

          {/* Main Content */}
          <main className="lg:col-span-8">
            <Header />
            <Hero />
            <Mission />
          </main>
        </div>
        
        {/* Sections that span full width or appear below */}
        <div className="mt-16 lg:mt-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <WhyUs />
              <div className="w-full h-80 lg:h-full rounded-3xl overflow-hidden">
                <img src="https://picsum.photos/id/1074/800/1000" alt="Conducción segura" className="w-full h-full object-cover" />
              </div>
           </div>
        </div>

        <div className="mt-16 lg:mt-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="w-full h-80 lg:h-full rounded-3xl overflow-hidden lg:order-1">
                <img src="https://picsum.photos/id/10/800/1000" alt="Plataforma de autoescuela" className="w-full h-full object-cover" />
              </div>
              <HowItWorks />
           </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default App;
