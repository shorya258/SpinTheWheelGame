// import logo from "./logo.svg";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Page1 />
        </Route>
        <Route exact path="/page2">
          <Page2 />
        </Route>
        <Route exact path="/page3">
          <Page3 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
