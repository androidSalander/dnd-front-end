import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import './App.css'
import Home from './Home'
import AllCharactersContainer from './containers/AllCharactersContainer'
import OneCharacterContainer from './containers/OneCharacterContainer'
import CreateCharacterForm from './containers/CreateCharacterForm'

class App extends Component {
  state = {
    characters: []
  }
   componentDidMount() {
     this.getAllCharacters()
   }

   getAllCharacters = () => {
     return fetch('http://localhost:9000/characters')
      .then(res => res.json())
      .then(data => this.setState( { characters: data }))
      .catch(err => console.log("critical failure", err))
   }

  render() {
    return (
      <div className="App">
        <NavLink className="nav-link" to={'/'}>Home</NavLink>
        <NavLink className="nav-link" to={'/characters'}>Enter the Dungeon</NavLink>
        <NavLink className="nav-link" to={'/create_character'}>Create a Character</NavLink>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/characters' render={ (props) => {
            return <AllCharactersContainer {...props} characters={ this.state.characters } />
          } }/>
          <Route path={'/characters/:id'} render={ (props) => {
            return <OneCharacterContainer {...props} character={ this.state.characters[props.match.params.id] } />
          } }/>
          <Route path='/create_character' getAllCharacters={this.getAllCharacters} component={ CreateCharacterForm } />
        </Switch>
      </div>
    )
  }
}

export default App
