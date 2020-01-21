import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class AllCharactersContainer extends Component {
   render() {
    let characterList = this.props.characters.map((character, index) => {
      return(
        <div>
          <li>
            <NavLink className='character-view' to={`/characters/${ character.rowid-1 }`}>{character.name}</NavLink>
          </li>
        </div>
      )
    })
    return(
      <div>
        <h1>Characters</h1>
        <ul>
          {characterList}
        </ul>
      </div>
    )
  }
}

export default AllCharactersContainer
