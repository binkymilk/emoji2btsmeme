import React from 'react'
import { Grid, Cell } from 'styled-css-grid'
import Gallery from 'react-photo-gallery'

var photos = []

class PhotoGallery extends React.Component {

	constructor(props) {
		super(props)
		this.importAll = this.importAll.bind(this)

		const images = this.importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/))

		photos = [
			{ src: images['images.jpeg'], width: 5, height: 3 },
			{ src: images['IMG_20190114_113616.jpg'], width: 5, height: 3 },
			{ src: images['IMG_20190114_223111.jpg'], width: 2, height: 2 },
			{ src: images['IMG_20190115_190845.jpg'], width: 4.5, height: 3 },
			{ src: images['IMG_20190116_072947.jpg'], width: 4.5, height: 3 },
			{ src: images['IMG_20190117_221716.jpg'], width: 2.25, height: 2 },
			{ src: images['IMG_20190118_012120.jpg'], width: 2, height: 2 },
			{ src: images['IMG_20190118_165806.jpg'], width: 2, height: 2 },
			{ src: images['IMG_20190119_113138.jpg'], width: 2, height: 2 },
			{ src: images['IMG_20190120_003906.jpg'], width: 3.5, height: 3 },
		]
	}

	importAll(r) {
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
