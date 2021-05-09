import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import "./styles/theme.scss";
import { toggleThemes } from "./utils/toggleThemes";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    isDarkMode ? toggleThemes("dark") : toggleThemes("light");
  });
  return (
    <BrowserRouter>
      <Header onChange={toggleDarkMode} />
      <Switch>
        <Route path="/home" exact>
          hello
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
