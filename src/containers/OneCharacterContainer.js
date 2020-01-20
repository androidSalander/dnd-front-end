import React, { Component } from 'react'

class OneCharacterContainer extends Component {
  render() {
    return(
      <div>
        <p>clargh</p>
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
