import React from 'react'
import { Grid, Cell } from 'styled-css-grid'
import styled from 'styled-components'

import * as u from './utils.js'

class EmojiSelection extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      emojis: []
    }
  }

  componentDidMount() {
    u.getEmojis().then((result) => {
      this.setState({ emojis: result.data })
    })
  }

  render () {
    return (
      <Grid columns={12} className={this.props.className}>
        <Cell width={1} />
        <Cell width={10}>
          <p>Select an emoji...</p>
          <div>
          {this.state.emojis.map((emoji, i) => (
            <i className={`em em-${emoji.name}`} key={i} />
          ))}
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
