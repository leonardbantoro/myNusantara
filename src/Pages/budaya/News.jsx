import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css';
import NewsArticle from './NewsArticle';
import Navbar from './Navbar';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "96408581285748fb9ad30742aacc0d92";
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=Indonesia&pageSize=15&apiKey=${apiKey}`
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching articles:", error);
    return <p>Error loading articles: {error.message}</p>;
  }

  return (
    <div className="container">
      <Navbar />
      <h1 className="my-5 text-center mb-5">Breaking News</h1>
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <NewsArticle article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
