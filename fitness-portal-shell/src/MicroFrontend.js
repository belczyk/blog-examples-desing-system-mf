import React, { Component } from 'react'

export default class MicroFrontend extends Component {

    get containerId() {
        return `mf-${this.props.name}`;
    }

    render() {
        return <div id={this.containerId}></div>
    }

    componentDidMount() {
        window[`${this.props.name}Mount`](document.getElementById(this.containerId), {isStandAlone: false})
    }

    componentWillUnmount() {
        window[`${this.props.name}Unmount`](document.getElementById(this.containerId), {isStandAlone: false})
    }
}
