import React, { useState } from 'react';
import { recipes } from './recipes';
import CocktailCard from './components/CocktailCard';
import CocktailModal from './components/CocktailModal';

function App() {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      title: "Cocktails",
      subtitle: "Curated recipes for the home bartender.",
      searchPlaceholder: "Search recipes...",
      noResults: "No cocktails found matching",
      footer: "Cocktail Collection",
      viewRecipe: "View Recipe",
      ingredients: "Ingredients",
      preparation: "Preparation",
      shots: "Shots",
      mocktails: "Mocktails"
    },
    tr: {
      title: "Kokteyller",
      subtitle: "Ev barmeni için özenle seçilmiş tarifler.",
      searchPlaceholder: "Tarif ara...",
      noResults: "Eşleşen kokteyl bulunamadı",
      footer: "Kokteyl Koleksiyonu",
      viewRecipe: "Tarifi Görüntüle",
      ingredients: "İçindekiler",
      preparation: "Hazırlanış",
      shots: "Shotlar",
      mocktails: "Alkolsüz Kokteyller"
    }
  };

  const t = translations[language];
  const currentRecipes = recipes[language];

  const filteredRecipes = currentRecipes.filter(recipe => 
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const cocktails = filteredRecipes.filter(r => r.category === 'Cocktail');
  const shots = filteredRecipes.filter(r => r.category === 'Shot');
  const mocktails = filteredRecipes.filter(r => r.category === 'Mocktail');

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-4 py-8 md:px-8 md:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header - Simple & Modern */}
        <header className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                {t.title}
              </h1>
              <p className="text-neutral-400 text-lg">
                {t.subtitle}
              </p>
            </div>
            
            {/* Actions: Language Switcher & Search */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 items-center">
               <div className="flex bg-[#171717] border border-[#262626] rounded-lg p-1">
                 <button 
                   onClick={() => setLanguage('en')}
                   className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${language === 'en' ? 'bg-[#262626] text-white' : 'text-neutral-500 hover:text-white'}`}
                 >
                   English
                 </button>
                 <button 
                   onClick={() => setLanguage('tr')}
                   className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${language === 'tr' ? 'bg-[#262626] text-white' : 'text-neutral-500 hover:text-white'}`}
                 >
                   Türkçe
                 </button>
               </div>

               <div className="relative group w-full sm:w-auto">
                <input 
                  type="text" 
                  placeholder={t.searchPlaceholder}
                  className="w-full md:w-64 bg-[#171717] border border-[#262626] rounded-lg py-3 px-4 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-neutral-500 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg width="20" height="20" className="w-5 h-5 text-neutral-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
               </div>
            </div>
          </div>
        </header>

        {/* Grid - Fully Responsive */}
        {/* Grid - Fully Responsive */}
        {(cocktails.length > 0 || shots.length > 0 || mocktails.length > 0) ? (
          <div className="space-y-16">
            
            {/* Cocktails Section */}
            {cocktails.length > 0 && (
              <section>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {cocktails.map((cocktail) => (
                    <CocktailCard 
                      key={cocktail.id} 
                      cocktail={cocktail} 
                      onClick={setSelectedCocktail}
                      viewText={t.viewRecipe}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Shots Section */}
            {shots.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold text-white tracking-tight">{t.shots}</h2>
                  <div className="h-px bg-[#262626] flex-grow"></div>
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {shots.map((shot) => (
                    <CocktailCard 
                      key={shot.id} 
                      cocktail={shot} 
                      onClick={setSelectedCocktail}
                      viewText={t.viewRecipe}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Mocktails Section */}
            {mocktails.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold text-white tracking-tight">{t.mocktails}</h2>
                  <div className="h-px bg-[#262626] flex-grow"></div>
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {mocktails.map((mocktail) => (
                    <CocktailCard 
                      key={mocktail.id} 
                      cocktail={mocktail} 
                      onClick={setSelectedCocktail}
                      viewText={t.viewRecipe}
                    />
                  ))}
                </div>
              </section>
            )}

          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-[#262626] rounded-xl">
            <p className="text-neutral-500 text-lg">{t.noResults} "{searchQuery}"</p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-[#262626] text-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} {t.footer}</p>
        </footer>
      </div>

      <CocktailModal 
        cocktail={selectedCocktail} 
        onClose={() => setSelectedCocktail(null)} 
        labels={{ ingredients: t.ingredients, preparation: t.preparation }}
      />
    </div>
  );
}

export default App;
