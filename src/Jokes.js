import React, { useState, useEffect } from "react";
import "./Theme.css";
import "./spinnerStyle.css";
import "./Jokes.css";
import Spinner from "react-bootstrap/Spinner";

export const Jokes = () => {
  const [data, setData] = useState();

  useEffect(() => {
    let ismounted = true;
    fetch("https://tattijokes.herokuapp.com/allJokes", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((resData) => {
        if (ismounted) {
          setData(resData.jokes);
        }
        return () => {
          ismounted = false;
        };
      });
  }, []);

  // console.log(data);
  return data ? (
    data.map((element) => {
      return (
        <div className="jokesContainer" key={element.id}>
          <h3>{element.title}</h3>
          <h4>{element.jokes}</h4>
          <br />
        </div>
      );
    })
  ) : (
    <Spinner animation="border" className="spinner" />
  );
};
