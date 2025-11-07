
import React from 'react';

const steps = [
  {
    title: 'Contacta con nosotros',
    description: 'Ponte en contacto con nuestro equipo para conocer más sobre la plataforma y resolver tus dudas.'
  },
  {
    title: 'Recibe una demo',
    description: 'Te ofrecemos una demostración personalizada para que veas todo el potencial de nuestra herramienta.'
  },
  {
    title: 'Implementa la solución',
    description: 'Nuestro equipo te ayudará en el proceso de configuración e integración en tu autoescuela.'
  },
  {
    title: 'Transforma tu autoescuela',
    description: 'Empieza a disfrutar de una gestión más eficiente y ofrece la mejor formación a tus alumnos.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        ¿Cómo empezar a usar nuestra plataforma?
      </h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center mt-1">
              <span className="font-bold">{index + 1}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
