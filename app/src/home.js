import React from 'react'

import Header from './Header.js'
import EmojiSelection from './EmojiSelection.js'
import PhotoGallery from './PhotoGallery.js'

class Home extends React.Component {
	render () {
		return (
			<div>
				<Header />
				<EmojiSelection />
				<PhotoGallery />
			</div>
		)
	}
}

export default Home
