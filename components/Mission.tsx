
import React from 'react';

const stats = [
  { value: '100+', label: 'Autoescuelas Asociadas' },
  { value: '120+', label: 'Lecciones Interactivas' },
  { value: '4K+', label: 'Alumnos Formados' },
  { value: '80+', label: 'Funcionalidades' }
];

const Mission: React.FC = () => {
  return (
    <section className="mt-20 px-4">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold text-gray-900 leading-snug">
          Nuestra misión es construir una solución robusta y escalable que mejore la formación en seguridad vial y la gestión para autoescuelas.
        </h2>
        <p className="mt-6 text-gray-600">
          Bienvenidos a nuestro ecosistema digital. Ofrecemos una forma conveniente y moderna de mejorar la educación vial, reduciendo tiempos y optimizando recursos para las autoescuelas.
        </p>
        <button className="mt-8 bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-primary-hover transition-all">
          Saber Más
        </button>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-light p-6 rounded-2xl text-center">
            <p className="text-5xl font-extrabold text-gray-900">{stat.value}</p>
            <p className="mt-2 text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
