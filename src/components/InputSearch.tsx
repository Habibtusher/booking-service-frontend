
"use client";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
type Search = {
  onSearch: (searchResult: string) => void;
};
const FoodSearch: React.FC<Search> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("object");
    onSearch(searchTerm);
  };

  return (
    <div className="mb-10 flex w-96 items-center justify-center  relative">
      <input
        type="text"
        placeholder="Ex: Burger, Pizza..."
        className="input input-bordered input-md w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button
        onClick={handleSearch}
        className="absolute inset-y-0 right-5 rounded "
      >
        <BsSearch />
      </button>
    </div>
  );
};

export default FoodSearch;
