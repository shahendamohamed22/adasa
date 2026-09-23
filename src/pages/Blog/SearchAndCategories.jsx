
export default function SearchAndCategories({ activeCategory, setActiveCategory , searchInput , setSearchInput }) {
    const categories = [
        { name: "جميع المقالات", key: "all" },
        { name: "إضاءة", key: "إضاءة" },
        { name: "بورتريه", key: "بورتريه" },
        { name: "مناظر طبيعية", key: "مناظر طبيعية" },
        { name: "تقنيات", key: "تقنيات" },
        { name: "معدات", key: "معدات" },
    ]
    return (
        <>
            <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        <div className="relative w-full md:w-80">
                            <input placeholder="ابحث في المقالات..." className="text-gray-400 input-dark rounded-2xl w-full px-5 py-3 pr-12"
                                type="text" value={searchInput}
                                 onChange={(e) => setSearchInput(e.target.value)} />

                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                                </path>
                            </svg>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">

                            {categories.map((category) => (
                                <button onClick={() => setActiveCategory(category.key)} key={category.key}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer
                                ${activeCategory == category.key ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white" : " bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 "}`}>
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
