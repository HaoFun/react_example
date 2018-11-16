import React, { Component } from 'react';

class Square extends Component
{
    constructor() {
        super()
        this.state = {
            value: null
        }
    }

    render() {
        return React.createElement(
            'button',
            {className: 'square', onClick: () => this.props.onClick()},
            this.props.value)
    }
}

export default Square