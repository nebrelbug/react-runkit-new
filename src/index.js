import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './runkit'
import styles from './styles.css'

class ExampleComponent extends Component {
  render() {
    const { text } = this.props

    return <div className={styles.test}>Example Component: {text}</div>
  }
}

// Based off code from https://github.com/runkitdev/react-runkit

export default class Embed extends Component {
  static propTypes = {
    source: PropTypes.string,
    readOnly: PropTypes.bool,
    mode: PropTypes.string,
    nodeVersion: PropTypes.string,
    env: PropTypes.array,
    title: PropTypes.string,
    minHeight: PropTypes.string,
    packageTimestamp: PropTypes.string,
    preamble: PropTypes.string,
    onLoad: PropTypes.func,
    onURLChanged: PropTypes.func,
    onEvaluate: PropTypes.func
  }

  shouldComponentUpdate() {
    return false
  }
  componentWillReceiveProps(nextProps) {
    if (this.embed) {
      const { props } = this
      if (props.source !== nextProps.source)
        this.embed.setSource(nextProps.source)
      if (props.preamble !== nextProps.preamble)
        this.embed.setPreamble(nextProps.preamble)
    }
  }
  evaluate(callback) {
    this.embed.evaluate(callback)
  }
  getSource(callback) {
    this.embed.getSource(callback)
  }
  getURL() {
    return this.embed.URL
  }
  componentDidMount() {
    const element = this.refs.embed
    const options = { ...this.props, element }

    this.embed = RunKit.createNotebook(options)
  }
  componentWillUnmount() {
    this.embed.destroy()
    this.embed = null
  }
  render() {
    return (
      <div ref="embed" className={this.props.className || 'react-runkit'} />
    )
  }
}
