import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, ErrorPage } from './pages'
import { Navbar } from './components'
import React from 'react'
function App() {
 return (
  <Router>
   <Navbar />
   <Switch>
    <Route exact path="/">
     <HomePage />
    </Route>
    <Route exact path="/"></Route>
    <Route exact path="/"></Route>
    <Route exact path="/"></Route>
    <Route path="*">
     <ErrorPage />
    </Route>
   </Switch>
  </Router>
 )
}

export default App
