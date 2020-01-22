import React, { Component } from 'react'

class Delete extends Component {
  handleDelete = (rowid) => {
    fetch(`http://localhost:9000/characters/${ rowid }`, {
      method: 'DELETE'
    })
      .then(res => {
        console.log('nat 20', res)
      })
      .catch(err => console.log("critical failure", err))
  }

  render() {
    return(
      <div>
        <h1>Are you sure you want to delete?</h1>
        <button onClick={() => this.handleDelete(this.props.characterId)}>DELETE</button>
        <button onClick={() => this.props.history.goBack()}>BACK</button>
      </div>
    )
  }
}

export default Delete
