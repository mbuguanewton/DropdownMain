import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./views";
import Services from './views/Services';
import Ecommerce from './views/Commerce';
function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/services" component={Services} exact />
          <Route path="/ecommerce" component={Ecommerce} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
