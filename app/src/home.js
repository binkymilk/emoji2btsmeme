import React from 'react'

import Header from './Header.js'
import EmojiSelection from './EmojiSelection.js'
import PhotoGallery from './PhotoGallery.js'
import * as u from './utils.js'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      memes: []
    }

    this.fetchImages = this.fetchImages.bind(this)
  }

  componentDidMount() {
    u.getAllImages().then((result) => {
      this.setState({ memes: result.data })
    })
  }

  fetchImages(emojiName) {
    u.getImages(emojiName)
      .then(result => {
        this.setState({ memes: result.data })
      })
  }

  render () {
    return (
      <div>
        <Header />
        <EmojiSelection
          fetchImages={this.fetchImages}
        />
        <PhotoGallery
          memes={this.state.memes}
        />
      </div>
    )
  }
}

export default Home
