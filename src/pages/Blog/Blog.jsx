import { useEffect, useState } from "react";
import Hero from "./Hero";
import SearchAndCategories from "./SearchAndCategories";
import Articles from "./Articles";
import { useSearchParams } from "react-router-dom";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const setActiveCategory = (category) => {
    setSearchParams({ category });
  };

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  });

  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a]">

        <Hero />
        <SearchAndCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory}
          searchInput={searchInput} setSearchInput={setSearchInput} />
        <Articles activeCategory={activeCategory} searchInput={searchInput} />

      </div>

    </>
  )
};
