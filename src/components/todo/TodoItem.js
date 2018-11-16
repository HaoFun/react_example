import React, { Component } from 'react'
import { ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types'

class TodoItem extends Component
{
    componentWillMount() {
        console.log('componentWillMount---TodoItem')
    }

    componentDidMount() {
        console.log('componentDidMount---TodoItem')
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate---TodoItem')
        return true
    }

    componentWillUpdate() {
        console.log('componentWillUpdate---TodoItem')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate---TodoItem')
    }


    render() {
        const { content, text } = this.props
        return (
            <div
                onClick={this.handleClick}
            >
                {`${text}----${content}`}
            </div>
        )
    }
    handleClick = () => {
        const { deleteItem, index } = this.props
        deleteItem(index)
    }
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    deleteItem: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

TodoItem.defaultProps = {
    text: 'Hello'
}

export default TodoItem