import React from 'react'
import Front from './components/Front'
import {BrowserRouter as Router} from 'react-router-dom'
import { Link, Route, Switch} from 'react-router-dom'
import Page from './components/Page'




function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path="/">
                    <Front/>
                </Route>
                <Route path="/page">
                    <Page/>
                </Route>
            </Switch>
            </Router>
    </div>
  );
}

export default App;
