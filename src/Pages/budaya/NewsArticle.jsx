import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ article }) => {
  return (
    <div className="card h-100">
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="card-img-top" />
      )}
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsArticle;
