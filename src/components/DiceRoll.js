import React, { Component } from 'react'

class DiceRoll extends Component {
  state = {
    charStat: ''
  }

  rollForCharacterStats = () => {
    let rollD6 = () => Math.floor(Math.random() * (7 - 1) + 1)
    let diceArray = []
    for (let i = 0; i < 4; i++) {
      diceArray.push(rollD6())
    }
    let min = Math.min(...diceArray)
    let minIndex = diceArray.indexOf(min)
    diceArray.splice(minIndex, 1)
    let finalValue = diceArray.reduce((accumulator, currentValue) => accumulator + currentValue)
    this.setState( { charStat: finalValue })
  }

  render() {
    return(
      <div>
        <button onClick={this.rollForCharacterStats}>Roll for Stats! <span role='img' aria-label='6-sided die'>🎲</span></button>
        <h5>{ this.state.charStat }</h5>
      </div>
    )
  }
}

export default DiceRoll
