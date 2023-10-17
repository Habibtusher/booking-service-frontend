// FoodSearch.js
"use client"
import { useState } from 'react';
type Search = {
    onSearch: (searchResult: string) => void
}
const FoodSearch:React.FC<Search> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="mb-4 flex items-center justify-center ">
      <input
        type="text"
        placeholder="Search for food..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded px-4 py-2 "
      >
        Search
      </button>
    </div>
  );
};

export default FoodSearch;
