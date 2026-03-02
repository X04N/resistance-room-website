import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '../data/blog';
import { FaCalendar, FaUser, FaTag } from 'react-icons/fa';

export const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const filteredPosts = selectedCategory === 'Todos'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Consejos, historias y noticias sobre el mundo de los escape rooms
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {blogCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map(post => (
            <Link
              key={post.slug}
              to={`/${post.slug}/`}
              className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/12 transition-all group"
            >
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold mb-4">
                <FaTag className="inline mr-1" />
                {post.category}
              </span>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-400 mb-4">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <FaCalendar className="text-green-500" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaUser className="text-green-500" />
                  <span>{post.author}</span>
                </div>
              </div>

              {/* Read More */}
              <div className="mt-4 text-green-500 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Leer más →
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">
              No hay artículos en esta categoría todavía.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
