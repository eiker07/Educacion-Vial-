
import React from 'react';

const SidePanel: React.FC = () => {
  return (
    <aside className="bg-gray-900 text-white rounded-3xl p-10 h-full flex flex-col">
      <div className="flex-grow">
        <h2 className="text-4xl font-bold leading-tight mb-6">
          Únete a la revolución de la formación vial y avanza hacia un futuro más seguro.
        </h2>
        <button className="bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-primary-hover transition-all">
          Saber Más
        </button>
      </div>
      <div className="mt-8">
        <img 
          src="https://images.unsplash.com/photo-1517524206127-48bbd363f357?q=80&w=1887&auto=format&fit=crop" 
          alt="Vista interior de un coche moderno" 
          className="rounded-2xl object-cover w-full h-96"
        />
      </div>
    </aside>
  );
};

export default SidePanel;
