import { Link } from 'react-router-dom'
import articles from '../../data/posts'
import { useState } from 'react'

export default function Categories() {

        const [categories , setCategories] = useState(articles.categories) 
        const icons = ["fa-sun" , "fa-user" , "fa-mountain" , "fa-sliders" , "fa-sun"]

    return (
        <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="section-label bg-amber-700/20 border-amber-600/50 rounded-2xl border-2 py-1.5 px-3 inline-flex items-center gap-2 mb-8 animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                        </span>
                        <span className="text-sm text-orange-600 font-medium text-neutral-300">
                            التصنيفات
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                       استكشف حسب الموضوع
                    </h2>
                    <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        اعثر على محتوى مصمم حسب اهتمامك
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((category , index)=>( <Link
                        className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                        to={`/blog?category=${category.name}`}
                        style={{ animationDelay: "0ms" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                                <i className={`fa-solid ${icons[index]}  text-xl text-orange-500 group-hover:text-white transition-colors duration-300`} />
                            </div>

                            <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                                {category.name}
                            </h3>

                            <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                                {category.count} مقالة
                            </p>

                            <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                                <svg className="w-4 h-4 text-white rotate-180" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>))}
                   


                </div>
            </div>
        </section>
    )
}
