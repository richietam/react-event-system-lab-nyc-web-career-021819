import React, { Component } from 'react'

export default class EyesOnMe extends Component {

  focusHandler = () => {
    console.log('Good!')
  }

  clickHandler = () => {
    console.log('Hey! Eyes on me!')
  }

  render () {
    return (
      <div>
        <button onFocus={this.focusHandler} onBlur={this.clickHandler}>A Button</button>
    </div>
    )
  }
}
