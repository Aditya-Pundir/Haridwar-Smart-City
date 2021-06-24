import React, { useEffect, useState } from "react";
import "./Theme.css";
import "./CovidFetcherStyle.css";
import { Card } from "react-bootstrap";

export const CovidDataFetcher = () => {
  // useState for setting the data:
  const [info, setInfo] = useState([]);

  // Fetching the data asynchonously:
  const fetchingAsync = async () => {
    const url = "https://api.covid19india.org/data.json";
    try {
      const response = await fetch(url);
      const data = await response.json();
      // Setting the value of info to the statewise data:
      setInfo(data.statewise);
    } catch (err) {
      // Catching error (if occurrs)
      console.log(err);
    }
  };

  // Fetching data in useEffect:
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchingAsync();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  // Returning each element of the data:
  return info.map((element) => {
    return (
      <Card key={element.active} className="card">
        <Card.Body>
          <Card.Title>{element.state}</Card.Title>
          <Card.Text>
            Active: {element.active} <br />
            Confirmed: {element.confirmed} <br />
            Deaths: {element.deaths} <br />
            Recovered: {element.recovered} <br />
            Last Updated Time: {element.lastupdatedtime}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });
};
