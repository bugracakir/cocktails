import React, { useEffect } from 'react';

const CocktailModal = ({ cocktail, onClose, labels }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!cocktail) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" />
      
      <div 
        className="relative w-full max-w-2xl bg-[#171717] border border-[#262626] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-full"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-[#262626] flex justify-between items-start sticky top-0 bg-[#171717] z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
              {cocktail.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {cocktail.name}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#262626] text-neutral-500 hover:text-white transition-all -mr-2 -mt-2"
          >
            <svg width="24" height="24" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
          <p className="text-neutral-300 text-lg leading-relaxed mb-8 font-light">
            {cocktail.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Ingredients */}
            <div>
              <h4 className="flex items-center text-sm font-bold uppercase tracking-wider text-white mb-4">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                {labels?.ingredients || 'Ingredients'}
              </h4>
              <ul className="space-y-3">
                {cocktail.ingredients.map((item, index) => (
                  <li key={index} className="text-neutral-300 border-b border-[#262626]/50 pb-2 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparation */}
            <div>
              <h4 className="flex items-center text-sm font-bold uppercase tracking-wider text-white mb-4">
                 <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                {labels?.preparation || 'Preparation'}
              </h4>
              <div className="space-y-4">
                {cocktail.instructions.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-neutral-600 font-mono font-bold pt-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-neutral-300 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailModal;
