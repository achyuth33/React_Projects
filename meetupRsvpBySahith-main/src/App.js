import { BrowserRouter, Route, Switch } from "react-router-dom";

import FirstScreen from "./firstScreen";

import SecondAndThird from "./secondAndThirdScreen";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={FirstScreen} />
      <Route exact path="/allDetails" component={SecondAndThird} />
    </Switch>
  </BrowserRouter>
);

export default App;
