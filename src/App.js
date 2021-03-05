import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./views";


function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <GlobalStyle />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
