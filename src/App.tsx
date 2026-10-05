import { useState } from "react"
import { DEV_LOG_POSTS } from "./data/posts"
import type { Post } from "./data/posts"
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default function App() {
  // Sets up useState for selecting a specific category of post
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const filteredPosts = selectedCategory === 'All'
    ? DEV_LOG_POSTS
    : DEV_LOG_POSTS.filter(post => post.category === selectedCategory);

    const categories = ['All', 'Math', 'Computer Graphics']

    return (
      <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
        {/* Nav Header */}
        <header className="border-b border-zinc-200 bg-white sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-tight">Dani_Dev_Log...</h1>
            <span className="text-xs font-medium px-2.5 py-1 bg-zinc-100 rounded-full">v0.0.1</span>
          </div>
        </header>
        {/* Main Container */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Intro Section */}
          <section className="mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Magician's Hat of Secrets</h2>
            <p className="text-zinc-600 max-w-xl text-lg leading-relaxed">
              A documentation of all the projects & research I am pursuing with a focus on user interactivity and mathematical precision.
            </p>
          </section>

        
        {/* Category Filters */}
        <div className="flex gap-2 mb-8 border-b border-zinc-200 pb-4 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Responsive Grid List of Posts */}
        <div className="grid gap-6">
          {filteredPosts.map((post: Post) => (
            <article 
              key={post.id} 
              className="p-6 bg-white rounded-xl border border-zinc-200 shadow-xs hover:border-zinc-300 hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                  {post.category}
                </span>
                <span className="text-xs text-zinc-400">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                {post.summary}
                </ReactMarkdown>
              </p>
            </article>
          ))}
        </div>       
        </main>
      </div>
    );
}