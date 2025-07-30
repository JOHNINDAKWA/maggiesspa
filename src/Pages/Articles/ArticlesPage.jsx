import React from 'react';
import { Link } from 'react-router-dom';
import articles from './articles'; // Import your static article data
import './ArticlesPage.css'; // We'll create this CSS file

const ArticlesPage = () => {
  return (
    <div className="articles-page-container">
      <h1>Our Latest Articles</h1>
      <p className="articles-intro">
        Stay updated with the latest trends, tips, and insights on beauty, wellness, and relaxation from Maggie's Spa experts.
      </p>

      <div className="articles-grid">
        {articles.map((article) => (
          <Link to={`/articles/${article.id}`} key={article.id} className="article-card">
            <img src={article.image} alt={article.alt} className="article-card-image" />
            <div className="article-card-content">
              <h2>{article.title}</h2>
              <p className="article-card-meta">
                By {article.author} | {article.date}
              </p>
              <p className="article-card-excerpt">{article.excerpt}</p>
              <span className="read-more">Read More &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;