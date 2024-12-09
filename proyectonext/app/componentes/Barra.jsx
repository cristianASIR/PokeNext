'use client'
import Image from "next/image";
import { getDictionary } from "./diccionario";
import { useState } from "react";

export default function Barra() {
    let [idioma, setIdioma] = useState('es');
  let dict = getDictionary(idioma);

  const changeLanguage = (lang) => {
    setIdioma(lang);
  }
    return (
        <>
        <nav>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/rutadinamixaabs">Tareas</a></li>
                <li><a href="/cargando">Cargando</a></li>
                <button onClick={() => changeLanguage('es')} className="p-2 rounded-full hover:bg-gray-200">
            <Image src="/spain.jpg" alt="Español" width={24}
                height={24} />
        </button>
        <button onClick={() => changeLanguage('en')} className="p-2 rounded-full hover:bg-gray-200">
            <Image src="/uk.jpg" alt="Ingles" width={24}
                height={24} />
        </button>
            </ul>
        </nav>
        
        <h1>{dict.title}</h1>
        <h1>{dict.description}</h1>
        </>
    );
}