// FoodSearch.js
"use client"
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
type Search = {
    onSearch: (searchResult: string) => void
}
const FoodSearch:React.FC<Search> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log("object");
    onSearch(searchTerm);
  };

  return (
    <div className="mb-4 flex w-96 items-center justify-center p-2 relative">
    <input
      type="text"
      placeholder="ex: burger, pizza"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border border-gray-300 rounded p-2 w-full"
    />
    <button
      onClick={handleSearch}
      className="absolute inset-y-0 right-5 rounded "
    >
     <BsSearch/>
    </button>
  </div>
  
  );
};

export default FoodSearch;
