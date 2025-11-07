
import React from 'react';
import CheckIcon from './icons/CheckIcon';

const features = [
  {
    title: 'Plataforma Innovadora',
    description: 'Utilizamos tecnología de punta para ofrecer una experiencia de aprendizaje interactiva y atractiva para los nuevos conductores.'
  },
  {
    title: 'Gestión Integral',
    description: 'Nuestra solución permite a las autoescuelas gestionar alumnos, clases, pagos y seguimiento de progreso de forma centralizada.'
  },
  {
    title: 'Aprendizaje Eficiente',
    description: 'Módulos teóricos y prácticos diseñados para maximizar la retención de conocimientos y mejorar las habilidades de conducción.'
  },
  {
    title: 'Solución Escalable',
    description: 'Ofrecemos planes flexibles que se adaptan tanto a autoescuelas pequeñas como a grandes centros de formación vial.'
  }
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        ¿Por qué elegir nuestro ecosistema digital?
      </h2>
      <div className="space-y-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center mt-1">
              <span className="font-bold">{index + 1}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
