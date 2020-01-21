import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class OneCharacterContainer extends Component {
  render() {
    return(
      <div>
        <ul>
          <li>Name: <span className='character-info'>{this.props.character.name}</span></li>
          <li>Class: <span className='character-info'>{this.props.character.class}</span></li>
          <li>Race: <span className='character-info'>{this.props.character.race}</span></li>
          <li>Gender: <span className='character-info'>{this.props.character.gender}</span></li>
          <li>Size: <span className='character-info'>{this.props.character.size}</span></li>
          <li>Age: <span className='character-info'>{this.props.character.age}</span></li>
          <li>Language: <span className='character-info'>{this.props.character.language}</span></li>
          <li>Speed: <span className='character-info'>{this.props.character.speed}</span></li>
          <li>Strength: <span className='character-info'>{this.props.character.strength}</span></li>
          <li>Dexterity: <span className='character-info'>{this.props.character.dexterity}</span></li>
          <li>Constitution: <span className='character-info'>{this.props.character.constitution}</span></li>
          <li>Intelligence: <span className='character-info'>{this.props.character.intelligence}</span></li>
          <li>Wisdom: <span className='character-info'>{this.props.character.wisdom}</span></li>
          <li>Charisma: <span className='character-info'>{this.props.character.charisma}</span></li>
          <li>Hit Points: <span className='character-info'>{this.props.character.hit_points}</span></li>
          <li>Hit Dice: <span className='character-info'>{this.props.character.hit_dice}</span></li>
        </ul>
        <NavLink className='nav-link' to={'/delete'}>Delete</NavLink>
        <NavLink className='nav-link' to={'/update'}>Update</NavLink>
      </div>
    )
  }
}
//what i want is a view button that links to this component
//the button will gather the oid of its parent and display that character
//the button could take the id as a prop? and pass that down to this container
//this component will have update and delete functions
//so first i have to make the link button ✅

export default OneCharacterContainer
