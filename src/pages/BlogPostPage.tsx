import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { FaCalendar, FaUser, FaTag, FaArrowLeft } from 'react-icons/fa';

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog/" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/blog/"
          className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 mb-8 transition-colors"
        >
          <FaArrowLeft />
          <span>Volver al Blog</span>
        </Link>

        {/* Article Header */}
        <article className="mb-12">
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold mb-4">
            <FaTag className="inline mr-1" />
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <FaCalendar className="text-green-500" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUser className="text-green-500" />
              <span>{post.author}</span>
            </div>
          </div>

          {/* Featured Image (if exists) */}
          {post.image && (
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}
        </article>

        {/* Article Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none mb-12
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-green-500 prose-a:no-underline hover:prose-a:text-green-400
            prose-strong:text-white
            prose-ul:text-gray-300 prose-ul:my-6
            prose-li:my-2
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl border border-green-500/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Listo para tu Aventura?
          </h3>
          <p className="text-gray-300 mb-6">
            Reserva ahora y vive la experiencia de The Resistance Room
          </p>
          <Link 
            to="/reservas-lanzadera-alien-nave-espacial/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-green-500/50"
          >
            Reserva tu Sesión
          </Link>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">Artículos Relacionados</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.slug !== post.slug && p.category === post.category)
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.slug}
                  to={`/${relatedPost.slug}/`}
                  className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/12 transition-all"
                >
                  <h4 className="text-lg font-bold text-white mb-2 hover:text-green-500 transition-colors">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
