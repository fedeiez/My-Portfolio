import { useState, type JSX } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() : JSX.Element {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    if (!query.trim()) return;
    console.log('Cerco:', query);
    // qui la logica di ricerca (vedi sotto) DA INSERIRE
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center border rounded-md overflow-hidden">
      <input
        type="text"
        id="searchInput"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Cerca..."
        className="px-3 py-2 outline-none text-black w-full dark:text-gray-50"
      />
      <button
        onClick={handleSearch}
        className="bg-orange-300 dark:bg-amber-800 hover:bg-orange-500 px-4 py-2 transition-colors"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}