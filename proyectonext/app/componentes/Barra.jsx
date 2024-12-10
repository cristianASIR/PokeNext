'use client'
import Image from "next/image";
import { getDictionary } from "./diccionario";
import { useState } from "react";
import Link from "next/link";

export default function Barra() {
  let [idioma, setIdioma] = useState('es');
  let dict = getDictionary(idioma);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);


  const changeLanguage = (lang) => {
    setIdioma(lang);
  }
  return (
    <>
      <nav>
        <ul>
          <li><Link href="/">Inicio</Link></li>
          <li className="relative inline-block text-left"> {/* Added relative and inline-block */}
            <button onClick={toggleDropdown} type="button" >
              Generaciones
            </button>
            {isDropdownOpen && ( // Conditional rendering for dropdown
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1" role="none">
                  <Link href="/Generaciones/Gen1" className="text-gray-700 block px-4 py-2" >Gen 1</Link>
                  <Link href="/Generaciones/Gen2" className="text-gray-700 block px-4 py-2" >Gen 2</Link>
                  <Link href="/404" className="text-gray-700 block px-4 py-2" >Gen 3</Link>
                </div>
              </div>
            )}
          </li>


          <li>
            <button onClick={() => changeLanguage('es')} className="p-2 rounded-full hover:bg-gray-200">
              <Image src="/spain.jpg" alt="Español" width={24} height={24} />
            </button>
          </li>
          <li>
            <button onClick={() => changeLanguage('en')} className="p-2 rounded-full hover:bg-gray-200">
              <Image src="/uk.jpg" alt="Ingles" width={24} height={24} />
            </button>
          </li>
          <li>
            <button onClick={() => changeLanguage('fr')} className="p-2 rounded-full hover:bg-gray-200">
              <Image src="/francia.png" alt="Frances" width={24} height={24} />
            </button>
          </li>
        </ul>
      </nav>

      <h1>{dict.title}</h1>
      <h1>{dict.home}</h1>
    </>
  );
}
