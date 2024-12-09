const dictionaries = {
    en: {
        title: 'Welcome to my multilingual page',
        description: 'This is a simple page that can be translated into Spanish and English.',
    },
    es: {
        title: 'Bienvenido a mi página multilingüe',
        description: 'Esta es una página sencilla que se puede traducir al español y al inglés.',
    },
}
export const getDictionary = (lang) => dictionaries[lang]