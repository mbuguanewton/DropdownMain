import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./views";
import Services from './views/Services';
function App() {
  return (
    <>
    
     <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/services" component={Services} exact/>
      </Switch>
    </Router>
    </>
   
  );
}

export default App;
