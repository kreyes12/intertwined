import React from 'react'
import CharactersList from './CharactersList.js'
import StoryList from './StoryList.js'
import StoryPage from './StoryPage.js'

class Page extends React.Component {

  state = {
    showCharacters: false
  }

  showCharacters = () => {
    this.setState({showCharacters: true})
  }


  render () {
    return (
      <div>
        {
          !this.props.selectedStory &&
            <StoryList
              stories={this.props.stories}
              selectStory={this.props.selectStory}
            />
        }
        {
          this.props.selectedStory && !this.props.selectedCharacter &&
            <CharactersList
              characters={this.props.selectedStory.availableCharacters}
              selectCharacter={this.props.selectCharacter}
            />
        }
        { this.props.selectedStory && this.props.selectedCharacter && 
          <StoryPage 
            selectedCharacter={this.props.selectedCharacter} 
            story={this.props.selectedStory} 
          /> 
        }
      </div>

    )
  }

}

export default Page
