import React, { Component } from 'react'

import Embed from 'react-runkit-new'

var source = `
var x = 0;
x += 1
`

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>An Example Embed</h1>
        <Embed source={source} />
        <h2>Different Node versions</h2>
        <Embed source={source} nodeVersion='7'/>

      </div>
    )
  }
}
