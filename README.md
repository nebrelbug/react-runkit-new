# react-runkit-new

> React Runkit component with no external scripts or stylesheets

[![NPM](https://img.shields.io/npm/v/react-runkit-new.svg)](https://www.npmjs.com/package/react-runkit-new) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Credit

This package is based off https://github.com/runkitdev/react-runkit. All credit goes to them.

In this project, we also bundle code from https://embed.runkit.com. This means you don't have to load it separately, but it also means our version may not be the latest.

### Differences from react-runkit

- You don't need to load an external script
- No scrollbar appears when you press 'enter'

## Install

```bash
npm install --save react-runkit-new
```

## Docs

We maintain the same API as https://github.com/runkitdev/react-runkit

## Usage

```jsx
import React, { Component } from 'react'

import Embed from 'react-runkit-new'

class Example extends Component {
  render () {
    return (
      <Embed source={`var x = 2+2`} />
    )
  }
}
```

## License

MIT © [nebrelbug](https://github.com/nebrelbug)
