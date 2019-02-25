import React from 'react'
import { Grid, Cell } from 'styled-css-grid'
import styled from 'styled-components'

class EmojiSelection extends React.Component {
	render () {
		return (
			<Grid columns={12} className={this.props.className}>
				<Cell width={1} />
				<Cell width={10}>
					<p>Select an emoji...</p>
					<div>
						<i className='em em-money_mouth_face' />
						<i className='em em-dagger_knife' />
						<i className='em em-stuck_out_tongue_closed_eyes'></i>
						<i className='em em-man-running'></i>
						<i className='em em-kissing_closed_eyes'></i>
						<i className='em em-triumph'></i>
						<i className='em em-tea'></i>
						<i className='em em-wink'></i>
						<i className='em em-smirk'></i>
						<i className='em em-sleeping'></i>
						<i className='em em-grimacing'></i>
						<i className='em em-expressionless'></i>
						<i className='em em-woman-facepalming'></i>
						<i className='em em-sob'></i>
						<i className='em em-heart_eyes'></i>
						<i className='em em-heart'></i>
						<i className='em em-zany_face'></i>
						<i className='em em-b'></i>
						<i className='em em-frowning'></i>
						<i className='em em-yum'></i>
						<i className='em em-skull'></i>
						<i className='em em---1'></i>
						<i className='em em-joy'></i>
						<i className='em em-neutral_face'></i>
						<i className='em em-rage'></i>
						<i className='em em-face_with_raised_eyebrow'></i>
						<i className='em em-scream'></i>
						<i className='em em-unamused'></i>
						<i className='em em-blush'></i>
					</div>
				</Cell>
				<Cell width={1} />
			</Grid>
		)
	}
}

export default styled(EmojiSelection)`
	.em {
		width: 70px;
		height: 70px;
		background-size: 50px 50px;
	}
`
