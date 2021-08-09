import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { About } from './components'

import Layout from './pages/layout/Layout'
import { Heritage } from './components/heritage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/*<div className="container">*/}
      <Switch>
        {/*<Route path="/path" component={Layout} exact />*/}
        {/*<Route path="/about" component={About} exact />*/}
        <Route path="/" component={Heritage} />
      </Switch>
      {/*</div>*/}
    </BrowserRouter>
  )
}

export default App
