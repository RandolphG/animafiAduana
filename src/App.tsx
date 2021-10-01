import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Carousel } from './pages'
import ExampleApp from './pages/Carousel/ExampleApp'
import {Home} from "./pages/home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
