import React from 'react'
import { Grid, Cell } from 'styled-css-grid'
import styled from 'styled-components'

class Header extends React.Component {
	render () {
		return (
			<Grid columns={12} className={this.props.className}>
				<Cell width={1} />
				<Cell width={10}>
					<h2>emoji2btsmeme</h2>
				</Cell>
				<Cell width={1} />
			</Grid>
		)
	}
}

export default styled(Header)`
	h2 {
	  font-weight: bold;
	  background: -webkit-linear-gradient(45deg, #ffc2b2, #f7abc8, #cac0e1, #95caed);
	  -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
	}
`
