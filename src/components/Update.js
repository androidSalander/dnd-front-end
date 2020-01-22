import React, { Component } from 'react'

class Update extends Component {
  state = {
    name: this.props.character.name,
    class: this.props.character.class,
    race: this.props.character.race,
    gender: this.props.character.gender,
    size: this.props.character.size,
    age: this.props.character.age,
    language: this.props.character.language,
    speed: this.props.character.speed,
    strength: this.props.character.strength,
    dexterity: this.props.character.dexterity,
    constitution: this.props.character.constitution,
    intelligence: this.props.character.intelligence,
    wisdom: this.props.character.wisdom,
    charisma: this.props.character.charisma,
    hit_points: this.props.character.hit_points,
    hit_dice: this.props.character.hit_dice
  }

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitUpdate = (event) => {
    event.preventDefault()
    return fetch(`http://localhost:9000/characters/${this.props.character.rowid}`, {
      method: 'PUT',
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
        this.props.history.goBack()
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return(
      <div>
        <h1>Time to Level Up!</h1>
        <form
          type='text'
          onSubmit={this.submitUpdate}
        >
          <input
            type='text'
            placeholder={this.props.character.name}
            name='name'
            onChange={this.handleUpdate}
            value={this.name}
          />
          <select
            name='class'
            onChange={this.handleUpdate}
            value={this.class}
          >
            <option selected value='Barbarian'>Barbarian</option>
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
          </select>
          <select
            name='race'
            onChange={this.handleUpdate}
            value={this.class}
          >
            <option selected value='Dragonborn'>Dragonborn</option>
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
            placeholder={this.props.character.gender}
            name='gender'
            onChange={this.handleUpdate}
            value={this.gender}
          />
          <input
            type='text'
            placeholder={this.props.character.size}
            name='size'
            onChange={this.handleUpdate}
            value={this.size}
          />
          <input
            type='text'
            placeholder={this.props.character.age}
            name='age'
            onChange={this.handleUpdate}
            value={this.age}
          /> <br/>
          <input
            type='text'
            placeholder={this.props.character.language}
            name='language'
            onChange={this.handleUpdate}
            value={this.language}
          />
          <input
            type='text'
            placeholder={this.props.character.speed}
            name='speed'
            onChange={this.handleUpdate}
            value={this.speed}
          /> <br/>
          <input
            type='text'
            placeholder={this.props.character.strength}
            name='strength'
            onChange={this.handleUpdate}
            value={this.strength}
          />
          <input
            type='text'
            placeholder={this.props.character.dexterity}
            name='dexterity'
            onChange={this.handleUpdate}
            value={this.dexterity}
          />
          <input
            type='text'
            placeholder={this.props.character.constitution}
            name='constitution'
            onChange={this.handleUpdate}
            value={this.constitution}
          /> <br/>
          <input
            type='text'
            placeholder={this.props.character.intelligence}
            name='intelligence'
            onChange={this.handleUpdate}
            value={this.intelligence}
          />
          <input
            type='text'
            placeholder={this.props.character.wisdom}
            name='wisdom'
            onChange={this.handleUpdate}
            value={this.wisdom}
          />
          <input
            type='text'
            placeholder={this.props.character.charisma}
            name='charisma'
            onChange={this.handleUpdate}
            value={this.charisma}
          /> <br/>
          <input
            type='text'
            placeholder={this.props.character.hit_points}
            name='hit_points'
            onChange={this.handleUpdate}
            value={this.hit_points}
          />
          <input
            type='text'
            placeholder={this.props.character.hit_dice}
            name='hit_dice'
            onChange={this.handleUpdate}
            value={this.hit_dice}
          /> <br/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Update
