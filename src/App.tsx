import * as React from 'react';
import { useState, useEffect } from 'react';

import './style.css';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/history');
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Spaceflight News</h1>
      <div className="news-container">
        {news.map((item) => (
          <div key={item.id} className="news-item">
            <h2>{item.title}</h2>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
