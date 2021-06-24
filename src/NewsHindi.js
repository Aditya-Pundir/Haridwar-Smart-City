import React, { useState, useEffect } from "react";
import "./Theme.css";
import "./newsSpinnerStyle.css";
import "./newsStyle.css";
import Spinner from "react-bootstrap/Spinner";

export const NewsHindi = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const haridwarUrl = `https://newsapi.org/v2/everything?q=haridwar&from=2021-05-24&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;
  const [data, setData] = useState();

  useEffect(() => {
    let fetchData = async () => {
      let unmounted = false;
      // Haridwar News
      let response = await fetch(haridwarUrl);
      let result = await response.json();
      if (!unmounted) {
        setData(result.articles);
      }
      return () => {
        unmounted = true;
      };
    };
    fetchData();
  }, [haridwarUrl]);
  return data ? (
    data.map((news, i) => {
      return (
        <div className="mainContainer" key={i}>
          <div className="card">
            <img
              className="card-img-top newsImage"
              alt="News"
              src={news.image}
            />
            <div className="card-body">
              <h5 className="card-title">{news.title}</h5>
              <p className="card-text">{news.description}</p>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div>
      <Spinner animation="border" className="spinner" />
    </div>
  );
};
