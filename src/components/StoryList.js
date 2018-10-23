import React from 'react'

class StoryList extends React.Component {

  render () {
    return (
      <div>
        <h2 id='select-story'>Select a story</h2>
        <ul id='story-list'>
          {
            this.props.stories.map(story =>
              <li onClick={() => this.props.selectStory(story)}>{story.name}</li>
            )
          }
        </ul>
      </div>
    )
  }

}

export default StoryList
