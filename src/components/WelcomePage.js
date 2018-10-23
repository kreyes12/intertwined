import React from 'react'

class WelcomePage extends React.Component {

  render () {
    return (
      <div>
        <h2 id='welcome'>Welcome to Intertwined</h2>
        <img id='woods' src={'../imgs/weepingwoods.jpg'} />
        <button id='begin-button' onClick={() => this.props.showStories()}>Begin Journey</button>
      </div>
    )
  }
}

export default WelcomePage
