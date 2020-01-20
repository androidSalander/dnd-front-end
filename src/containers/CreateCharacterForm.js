import React, { Component } from 'react'

class CreateCharacterForm extends Component {
  state = {
    name: '',
    class: '',
    race: '',
    gender: '',
    size: '',
    age: '',
    language: '',
    speed: '',
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: '',
    hit_points: '',
    hit_dice: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    return fetch('http://localhost:9000/characters', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        class: this.state.class,
        race: this.state.race,
        gender: this.state.gender,
        size: this.state.size,
        age: this.state.age,
        language: this.state.language,
        speed: this.state.speed,
        strength: this.state.strength,
        dexterity: this.state.dexterity,
        constitution: this.state.constitution,
        intelligence: this.state.intelligence,
        wisdom: this.state.wisdom,
        charisma: this.state.charisma,
        hit_points: this.state.hit_points,
        hit_dice: this.state.hit_dice
      })
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({
        name: '',
        class: '',
        race: '',
        gender: '',
        size: '',
        age: '',
        language: '',
        speed: '',
        strength: '',
        dexterity: '',
        constitution: '',
        intelligence: '',
        wisdom: '',
        charisma: '',
        hit_points: '',
        hit_dice: ''
      }, () => {
        this.props.getAllCharacters()
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return(
      <div>
        <h1>Create a Character</h1>
        <form
          type='text'
          onSubmit={this.handleSubmit}
        >
          <input
            type='text'
            placeholder='Name'
            name='name'
            onChange={this.handleChange}
            value={this.name}
          /> <br/>
          <select name='class' size='3'>
            <option value='Barbarian'>Barbarian</option>
            <option value='Bard'>Bard</option>
            <option value='Cleric'>Cleric</option>
            <option value='Druid'>Druid</option>
            <option value='Fighter'>Fighter</option>
            <option value='Monk'>Monk</option>
            <option value='Paladin'>Paladin</option>
            <option value='Ranger'>Ranger</option>
            <option value='Rogue'>Rogue</option>
            <option value='Sorcerer'>Sorcerer</option>
            <option value='Warlock'>Warlock</option>
            <option value='Wizard'>Wizard</option>
          </select> <br/>
          <select name='race' size='3'>
            <option value='Dragonborn'>Dragonborn</option>
            <option value='Dwarf'>Dwarf</option>
            <option value='Elf'>Elf</option>
            <option value='Gnome'>Gnome</option>
            <option value='Half-Elf'>Half-Elf</option>
            <option value='Halfling'>Halfling</option>
            <option value='Half-Orc'>Half-Orc</option>
            <option value='Human'>Human</option>
            <option value='Tiefling'>Tiefling</option>
          </select> <br/>
          <input
            type='text'
            placeholder='Gender'
            name='gender'
            onChange={this.handleChange}
            value={this.gender}
          /> <br/>
          <input
            type='text'
            placeholder='Size'
            name='size'
            onChange={this.handleChange}
            value={this.size}
          /> <br/>
          <input
            type='text'
            placeholder='Age'
            name='age'
            onChange={this.handleChange}
            value={this.age}
          /> <br/>
          <input
            type='text'
            placeholder='Language'
            name='language'
            onChange={this.handleChange}
            value={this.language}
          /> <br/>
          <input
            type='text'
            placeholder='Speed'
            name='speed'
            onChange={this.handleChange}
            value={this.speed}
          /> <br/>
          <input
            type='text'
            placeholder='Strength'
            name='strength'
            onChange={this.handleChange}
            value={this.strength}
          /> <br/>
          <input
            type='text'
            placeholder='Dexterity'
            name='dexterity'
            onChange={this.handleChange}
            value={this.dexterity}
          /> <br/>
          <input
            type='text'
            placeholder='Constitution'
            name='constitution'
            onChange={this.handleChange}
            value={this.constitution}
          /> <br/>
          <input
            type='text'
            placeholder='Intelligence'
            name='intelligence'
            onChange={this.handleChange}
            value={this.intelligence}
          /> <br/>
          <input
            type='text'
            placeholder='Wisdom'
            name='wisdom'
            onChange={this.handleChange}
            value={this.wisdom}
          /> <br/>
          <input
            type='text'
            placeholder='Charisma'
            name='charisma'
            onChange={this.handleChange}
            value={this.charisma}
          /> <br/>
          <input
            type='text'
            placeholder='Hit Points'
            name='hit_points'
            onChange={this.handleChange}
            value={this.hit_points}
          /> <br/>
          <input
            type='text'
            placeholder='Hit Dice'
            name='hit_dice'
            onChange={this.handleChange}
            value={this.hit_dice}
          /> <br/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default CreateCharacterForm
