import { useState } from "react"
import articles from "../../data/posts"
import GridArticleCard from "../../components/GridArticleCard"
import { Link } from "react-router-dom"

export default function RecentArticles() {

    let [recentArticles, setRecentArticles] = useState(articles.posts.slice(3, 6))
    return (


        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <div className="section-label bg-amber-700/20 border-amber-600/50 rounded-2xl border-2 py-1.5 px-3 inline-flex items-center gap-2 mb-8 animate-fade-in">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                            </span>
                            <span className="text-sm font-medium text-neutral-300">
                                الاحدث
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                            احدث المقالات
                        </h2>
                        <p class="text-gray-400 max-w-lg text-2xl">محتوى جديد طازج من المطبعة</p>
                    </div>
                    <Link to={"/blog"} className="mt-7 group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5">
                        عرض جميع المقالات
                        <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentArticles.map((article) => (
                        <GridArticleCard article={article} />
                    ))}
                </div>
            </div>
        </section>


    )
}
