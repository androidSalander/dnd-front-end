import React, { Component } from 'react'

class AllCharactersContainer extends Component {
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
    let characterList = this.state.characters.map(character => {
      return(
        <div>
          <li>
            <strong>Name:</strong> {character.name} <br/>
            <strong>Class:</strong> {character.class} <br/>
            <strong>Race:</strong> {character.race} <br/>
            <strong>Gender:</strong> {character.gender} <br/>
            <strong>Size:</strong> {character.size} <br/>
            <strong>Age:</strong> {character.age} <br/>
            <strong>Language:</strong> {character.language} <br/>
            <strong>Speed:</strong> {character.speed} <br/>
            <strong>Strength:</strong> {character.strength} <br/>
            <strong>Dexterity:</strong> {character.dexterity} <br/>
            <strong>Constitution:</strong> {character.constitution} <br/>
            <strong>Intelligence:</strong> {character.intelligence} <br/>
            <strong>Wisdom:</strong> {character.wisdom} <br/>
            <strong>Charisma:</strong> {character.charisma} <br/>
            <strong>Hit Points:</strong> {character.hit_points} <br/>
            <strong>Hit Dice:</strong> {character.hit_dice} <br/>
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
