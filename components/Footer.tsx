
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-24">
      <div className="max-w-screen-2xl mx-auto py-12 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            <span className="text-primary">Este es un cambio</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ejemplo. Todos los derechos reservados. Desarrollado con ❤️ para un futuro más seguro.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
