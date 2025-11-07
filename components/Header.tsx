
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-6 px-4">
      <div className="text-2xl font-bold text-gray-900">
        <span className="text-primary">Ejemplo</span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-600 hover:text-primary transition-colors">Inicio</a>
        <a href="#" className="text-gray-600 hover:text-primary transition-colors">Nosotros</a>
        <a href="#" className="text-gray-600 hover:text-primary transition-colors">Plataforma</a>
        <a href="#" className="text-gray-600 hover:text-primary transition-colors">Download</a>
      </nav>
      <a
        href="#"
        className="bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-primary-hover transition-all shadow-md hover:shadow-lg"
      >
        Contáctanos
      </a>
    </header>
  );
};

export default Header;
