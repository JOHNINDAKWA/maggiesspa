import React from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from './articles'; // Corrected import path for articles
import './ArticleDetailPage.css'; // We'll create this CSS file

const ArticleDetailPage = () => {
  const { articleId } = useParams(); // Get the ID from the URL

  // Optional: Scroll to top when component mounts/article changes
  // MOVED THIS USEEFFECT TO THE TOP, BEFORE THE EARLY RETURN
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
      <Link to="/articles" className="back-to-articles-bottom">Back to all articles</Link>
    </div>
  );
};

export default ArticleDetailPage;