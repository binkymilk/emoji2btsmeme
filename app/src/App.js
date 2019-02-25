import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import home from './home.js'

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Muli');

  body {
  	background-color: #f7f9fb;
  	font-family: 'Muli', sans-serif;
  	margin: 0;
  }
`

const BaseLayout = () => (
	<div>
		<GlobalStyle />
		<Route path='/' exact component={home} />
	</div>
)

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    )
  }
}

export default App;
