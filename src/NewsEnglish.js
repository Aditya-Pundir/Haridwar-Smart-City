import React, { useState, useEffect } from "react";
import "./Theme.css";
import "./newsSpinnerStyle.css";
import "./newsStyle.css";
import Spinner from "react-bootstrap/Spinner";

export const NewsEnglish = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const haridwarUrl = `https://gnews.io/api/v4/top-headlines?q=haridwar&max=10&lang=en&token=${apiKey}`;
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
          {/* <img className="newsImage" src={news.image} />
          <h4 key={data.indexOf(news)}>{news.title}</h4>
          <p key={data.indexOf(news) + 100}>Description: {news.description}</p>
          <br /> */}
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
