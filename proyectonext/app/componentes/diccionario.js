const dictionaries = {
    en: { title: 'Pokemon App', home: 'Home', gen1: 'Gen 1', gen2: 'Gen 2', gen3: 'Gen 3' }, 
    es: { title: 'Aplicación Pokémon', home: 'Inicio', gen1: 'Gen 1', gen2: 'Gen 2', gen3: 'Gen 3' }, 
    fr: { title: 'Application Pokémon', home: 'Accueil', gen1: 'Gen 1', gen2: 'Gen 2', gen3: 'Gen 3' },
}
export const getDictionary = (lang) => dictionaries[lang]
