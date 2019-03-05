import React from 'react'
import { Grid, Cell } from 'styled-css-grid'
import Gallery from 'react-photo-gallery'

var images

class PhotoGallery extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			photos: []
		}
		this.importAllPhotos = this.importAllPhotos.bind(this)

		images = this.importAllPhotos(require.context('./images', false, /\.(png|jpe?g|svg)$/))
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.memes !== this.props.memes) {
			var photos = []

			this.props.memes.forEach(meme => {
				photos.push({
					src: images[meme.title],
					width: parseFloat(meme.width),
					height: parseFloat(meme.height)
				})
			})
			this.setState({ photos: photos })
		}
	}

	importAllPhotos(r) {
		let images = {};
  	r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  	return images;
	}

	render () {
		return (
			<Grid columns={12} className={this.props.className}>
				<Cell width={1} />
				<Cell width={10}>
					<p>Choose a meme...</p>
					<Gallery photos={this.state.photos} />
				</Cell>
				<Cell width={1} />
			</Grid>
		)
	}
}

export default PhotoGallery
