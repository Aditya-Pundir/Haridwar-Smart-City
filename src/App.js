import React, { useState } from "react";
import "./Theme.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./Header";
import { NewsHindi } from "./NewsHindi";
import { NewsEnglish } from "./NewsEnglish";
import { Weather } from "./Weather";
// import { CovidDataFetcher } from "./CovidDataFetcher";
import { Jokes } from "./Jokes";

function App() {
  // Declaring a useState variable to set the user preffered news language:
  const [language, setLanguage] = useState("en");
  let lang;

  // Style of the news language selection:
  let selectStyle = {
    display: "block",
    margin: "auto",
    marginTop: "5rem",
    cursor: "pointer",
    height: "2.5rem",
    width: "80vw",
    outline: "none",
    border: "none",
    backgroundColor: "var(--blue)",
    color: "var(--cyan)",
    borderRadius: "0.6rem",
  };

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              if (language === "en") {
                lang = <NewsEnglish />;
              } else {
                lang = <NewsHindi />;
              }
              return (
                <>
                  {/* News select is here: */}
                  <select
                    style={selectStyle}
                    id="langSelect"
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                  </select>
                  {lang}
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/weather"
            render={() => {
              return <Weather />;
            }}
          ></Route>
          {/* <Route
            exact
            path="/covid"
            render={() => {
              return <CovidDataFetcher />;
            }}
          ></Route> */}
          <Route
            exact
            path="/jokes"
            render={() => {
              return <Jokes />;
            }}
          ></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
