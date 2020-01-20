import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import OneCharacterContainer from './OneCharacterContainer'

class AllCharactersContainer extends Component {
   render() {
    let characterList = this.props.characters.map((character, index) => {
      return(
        <div>
          <li>
            <strong>Name:</strong> {character.name} {" "}
            <strong>Class:</strong> {character.class} {" "}
            <strong>Race:</strong> {character.race} {" "}
            <strong>Gender:</strong> {character.gender} {" "}
            <strong>Size:</strong> {character.size} {" "}
            <strong>Age:</strong> {character.age} {" "}
            <strong>Language:</strong> {character.language} {" "}
            <strong>Speed:</strong> {character.speed} <br/>
            <strong>Strength:</strong> {character.strength} {" "}
            <strong>Dexterity:</strong> {character.dexterity} {" "}
            <strong>Constitution:</strong> {character.constitution} {" "}
            <strong>Intelligence:</strong> {character.intelligence} {" "}
            <strong>Wisdom:</strong> {character.wisdom} {" "}
            <strong>Charisma:</strong> {character.charisma} <br/>
            <strong>Hit Points:</strong> {character.hit_points} {" "}
            <strong>Hit Dice:</strong> {character.hit_dice} {" "} <br/>
            <NavLink to={`/characters/${ index }`}>View</NavLink>
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
