import React from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from './articles'; // Corrected import path for articles
import './ArticleDetailPage.css'; // We'll create this CSS file

const ArticleDetailPage = () => {
  const { articleId } = useParams(); // Get the ID from the URL

  // Scroll to top when component mounts/article changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="article-detail-container no-article-found">
        <h1>Article Not Found</h1>
        <p>The article you are looking for does not exist.</p>
        <Link to="/articles" className="back-to-articles">Back to Articles</Link>
      </div>
    );
  }

  return (
    <div className="article-detail-container">
      <Link to="/articles" className="back-to-articles">&larr; Back to all articles</Link>
      <img src={article.image} alt={article.alt} className="article-detail-image" />
      <h1 className="article-detail-title">{article.title}</h1>
      <p className="article-detail-meta">
        By {article.author} | {article.date}
      </p>
      <div
        className="article-detail-content"
        dangerouslySetInnerHTML={{ __html: article.content }} // Render HTML content
      />

      {/* Conditionally render the specific images for each article */}
      {article.decorImage && (
        <img
          src={article.decorImage}
          alt="Interior view of Maggie's Spa Nanyuki branch"
          style={{ maxWidth: '100%', height: 'auto', margin: '20px 0', borderRadius: '8px' }}
        />
      )}
      {article.massageBenefitsImage && (
        <img
          src={article.massageBenefitsImage}
          alt="Benefits of massage"
          style={{ maxWidth: '100%', height: 'auto', margin: '20px 0', borderRadius: '8px' }}
        />
      )}
      {article.skincareProductsImage && (
        <img
          src={article.skincareProductsImage}
          alt="Skincare products"
          style={{ maxWidth: '100%', height: 'auto', margin: '20px 0', borderRadius: '8px' }}
        />
      )}

      <Link to="/articles" className="back-to-articles-bottom">Back to all articles</Link>
    </div>
  );
};

export default ArticleDetailPage;
