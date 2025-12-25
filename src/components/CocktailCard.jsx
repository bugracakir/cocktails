import React from 'react';

const CocktailCard = ({ cocktail, onClick, viewText }) => {
  return (
    <div 
      onClick={() => onClick(cocktail)}
      className="modern-card cursor-pointer group h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
          {cocktail.name}
        </h3>
      </div>
      
      <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-grow">
        {cocktail.description}
      </p>

      <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
        <span>{viewText}</span>
        <svg width="16" height="16" className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
};

export default CocktailCard;
