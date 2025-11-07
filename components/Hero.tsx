
import React from 'react';
import PlayIcon from './icons/PlayIcon';

const Hero: React.FC = () => {
  return (
    <section className="mt-10 px-4">
      <div className="relative">
        <div className="max-w-3xl">
          <p className="text-gray-500 mb-4">Bienvenido a nuestro ecosistema digital de seguridad vial.</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            prueba
          </h1>
        </div>
        <div className="absolute top-0 right-0 text-right">
          <p className="text-gray-500 text-sm">Ofrecemos una solución robusta y escalable para mejorar la formación vial.</p>
          <p className="text-gray-400 text-xs mt-2">Establecido 2024</p>
        </div>

        <div className="mt-12 flex items-center gap-6">
          <button className="bg-primary text-white font-semibold py-4 px-8 rounded-full flex items-center gap-3 hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl">
            <PlayIcon />
            Ver Demo
          </button>
          <div className="max-w-xs">
            <p className="text-gray-600">
              Nuestra plataforma integra las herramientas más avanzadas para autoescuelas y alumnos, mejorando la eficiencia y seguridad.
            </p>
          </div>
        </div>

        <div className="mt-12">
            <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" 
                alt="Coche moderno en una carretera" 
                className="rounded-3xl object-cover w-full h-[400px]"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
