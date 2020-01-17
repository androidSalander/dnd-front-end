import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import './App.css'
import Home from './Home'
import AllCharactersContainer from './AllCharactersContainer'

function App() {
  return (
    <div className="App">
      <NavLink className="nav-link" to={'/'}>Home</NavLink>
      <NavLink className="nav-link" to={'/characters'}>Enter the Dungeon</NavLink>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/characters' component={ AllCharactersContainer }/>
      </Switch>
    </div>
  )
}

export default App
