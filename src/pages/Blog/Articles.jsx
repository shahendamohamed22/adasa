import { useEffect, useState } from 'react'
import articles from '../../data/posts'
import GridArticleCard from '../../components/GridArticleCard'
import ListArticleCard from '../../components/ListArticleCard'

export default function Articles({ activeCategory , searchInput}) {
    const pageBtns = ["1", "2", "3", "4", "5"]
    const [activePage, setActivePage] = useState("1")
    const [showMode, setShowMode] = useState("grid")

    const filterdArticles = articles.posts.filter(article => {
        const selectedCategory = activeCategory == "all" || article.category == activeCategory

        const SearchArticles =
            article.title.toLowerCase().trim().includes(searchInput.toLowerCase().trim()) ||
            article.excerpt.toLowerCase().trim().includes(searchInput.toLowerCase().trim())

        return selectedCategory && SearchArticles
    })
    const articlesPerPage = 6
    const startIndex = (Number(activePage) - 1) * articlesPerPage
    const currentArticles = activeCategory == "all" ? filterdArticles.slice(startIndex, startIndex + articlesPerPage) : filterdArticles

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
            <div className="mb-8 flex items-center justify-between">
                <p className="text-neutral-400">
                    عرض <span className="font-bold text-white">{filterdArticles.length}</span> مقالات
                    <span className={activeCategory == "all" ? "hidden" : ""}> في <span className='text-orange-500 font-bold'>{activeCategory}</span></span>
                </p>

                <div className="flex items-center gap-2">
                    <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                        <button onClick={() => setShowMode("grid")} className={`p-2 rounded-lg transition-all duration-300 ${showMode == "grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"} `}
                            title="عرض شبكي" >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </button>

                        <button onClick={() => setShowMode("list")} className={`ms-1 p-2 rounded-lg transition-all duration-300 ${showMode == "list" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"} `}
                            title="عرض قائمة">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {showMode === "grid" ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentArticles.map((article) => (
                        <GridArticleCard key={article.slug} article={article} />
                    ))}
                </div>)
                : (<div className="flex flex-col gap-6">
                    {currentArticles.map((article) => (
                        <ListArticleCard
                            key={article.slug}
                            article={article}
                        />
                    ))}
                </div>)}

            <div className={`flex justify-center items-center gap-2 mt-12 ${activeCategory == "all" ? "" : "hidden"}`}>
                <button onClick={() => {
                    if (activePage > 1) {
                        setActivePage(Number(activePage) - 1)
                    }
                }}
                    className={`p-3 rounded-xl border transition-all duration-300  border-[#262626] ${activePage == "1" ? "bg-[#0a0a0a] text-neutral-600 cursor-not-allowed" : "bg-[#161616] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"}`}>
                    <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="flex items-center gap-1">
                    {pageBtns.map((btn) => (<button onClick={() => setActivePage(btn)} className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 
                        ${activePage == btn ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"} `}>
                        {btn}
                    </button>))}
                </div>

                <button onClick={() => {
                    if (activePage < 5) {
                        setActivePage(Number(activePage) + 1)
                    }
                }}
                    className={`p-3 rounded-xl border transition-all duration-300  border-[#262626] ${activePage == "5" ? "bg-[#0a0a0a] text-neutral-600 cursor-not-allowed" : "bg-[#161616] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"}`}>
                    <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <p className={`text-center text-neutral-500 mt-4 text-sm  ${activeCategory == "all" ? "" : "hidden"}`}>
                {activePage} من 5 صفحات
            </p>
        </div>
    )
}
