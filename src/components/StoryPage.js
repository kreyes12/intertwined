import React from 'react'
import Scene from './Scene.js'
import Riddle from './Riddle.js'

class StoryPage extends React.Component {
  state = {
    currentScene: this.props.story.scenes[0].id
  }

  selectScene = scene => {
    const sceneEl = document.querySelector('#scene-text')
    const ogColor = sceneEl.style.color
    sceneEl.style.color = 'rgba(255,255,255,0)'
    setTimeout(() => {
      this.setState(
        {currentScene: scene},
        () => {
          sceneEl.style.color = ogColor
        }
      )
    }, 1200)
  }


  playSound = () =>
  {
    
  }


  render () {
    const currentScene = this.props.story.scenes.find(scene => scene.id === this.state.currentScene)
    
    return (
      <div>
      <Scene
        scene={currentScene}
        selectedCharacter={this.props.selectedCharacter}
        handleOptionSelect={this.selectScene}
      />
      {
        currentScene.finalScene &&
        <a href="/">Return to Homepage</a>
      }
      </div>
    )
  }
}

export default StoryPage
