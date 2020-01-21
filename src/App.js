import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import './App.css'
import Home from './Home'
import AllCharactersContainer from './containers/AllCharactersContainer'
import OneCharacterContainer from './containers/OneCharacterContainer'
import CreateCharacterForm from './containers/CreateCharacterForm'
import Delete from './components/Delete'
import Update from './components/Update'

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
          <Route
            exact path='/'
            component={ Home }
          />
          <Route
            exact path='/characters'
            render={
              (props) => {
                return <AllCharactersContainer {...props}
                  characters={ this.state.characters }
                />
              }
            }
          />
          <Route
            path={'/characters/:id'}
            render={
              (props) => {
                return this.state.characters.length
                        ? <OneCharacterContainer {...props}
                            character={ this.state.characters[props.match.params.id] }
                          />
                        : <h3>Loading...</h3>
              }
            }
          />
          <Route
            path='/create_character'
            render={
              (props) => {
                return <CreateCharacterForm {...props}
                getAllCharacters={ this.getAllCharacters }
                />
              }
            }
          />
          <Route
            path='/delete'
            render= {
              (props) => {
                return this.state.characters.length
                        ? <Delete {...props}
                            character={ this.state.characters[props.match.params.id] }
                          />
                        : <h3>Loading...</h3>
              }
            }
          />
          <Route
            path='/update'
            render= {
              (props) => {
                return <Update {...props}
                character={ this.state.characters[props.match.params.id] }
                />
              }
            }
          />
        </Switch>
      </div>
    )
  }
}

export default App
