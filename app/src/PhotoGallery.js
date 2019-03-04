import React from 'react'
import { Grid, Cell } from 'styled-css-grid'
import Gallery from 'react-photo-gallery'

import ImageService from './ImageService';
const imageService = new ImageService();

var photos = []
var images

class PhotoGallery extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			memes: []
		}

		this.importAllPhotos = this.importAllPhotos.bind(this)
		this.buildPhotoGallery = this.buildPhotoGallery.bind(this)

		images = this.importAllPhotos(require.context('./images', false, /\.(png|jpe?g|svg)$/))
	}

	buildPhotoGallery() {
		this.state.memes.forEach(meme => {
			photos.push({
				src: images[meme.title],
				width: meme.width,
				height: meme.height
			})
		})
	}

	componentDidMount() {
		imageService.getImages().then((result) => {
			this.setState({ memes: result.data }, this.buildPhotoGallery)
		})
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
					<Gallery photos={photos} />
				</Cell>
				<Cell width={1} />
			</Grid>
		)
	}
}

export default PhotoGallery
