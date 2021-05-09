import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact>
          hello
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
