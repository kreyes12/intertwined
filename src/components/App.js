import React, { Component } from 'react'
import '../App.css'
import Page from './Page.js'
import stories from '../story_data.js'
import WelcomePage from './WelcomePage.js'

class App extends Component {

  state = {
    characters: [],
    selectedStory: undefined,
    stories: stories,
    selectedCharacter: undefined,
    showStories: false
  }

  getCharacters = () => {
    return this.state.stories.map(story => story.character)
  }

  selectCharacter = character => {
    this.setState({
      selectedCharacter: character
    })
  }

  selectStory = (story) => {
    this.setState({selectedStory: story})
  }

  showStories = () => {
    this.setState({showStories: true})
  }


  render () {
    return (
      <div className='App'>
      {
        this.state.showStories ? 
        <Page 
          stories={this.state.stories} 
          selectedStory={this.state.selectedStory} 
          selectedCharacter={this.state.selectedCharacter} 
          selectStory={this.selectStory}
          selectCharacter={this.selectCharacter}
        /> :
        <WelcomePage 
        showStories={this.showStories}
        />
      }
      </div>
    )
  }
}

export default App
