import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dropdown from './components/dropdown/Dropdown'
import GlobalStyle from './globalStyles'
import Home from './views'

function App() {
    return (
        <>
            <Router>
                <GlobalStyle />
                <nav>
                    <Dropdown
                        label='dropdown'
                        children={
                            <ul>
                                <li>Hello</li>
                                <li>world</li>
                            </ul>
                        }
                    />
                    <Dropdown
                        label='services'
                        children={
                            <div>
                                <p>One</p>
                                <p>two</p>
                                <p>three</p>
                            </div>
                        }
                    />
                </nav>
                <Switch>
                    <Route path='/' component={Home} exact />
                </Switch>
            </Router>
        </>
    )
}

export default App
