import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
import store from './store'

const marginTopAndmarginLeftTen = {
    marginTop: '10px',
    marginLeft: '10px'
}

const width300PXAndmarginRight10PX = {
    width: '300px',
    marginRight: '10px'
}

const width300PXAndmarginTop10px = {
    width: '300px',
    marginTop: '10px'
}

export default class TodoList extends Component
{
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <div style={marginTopAndmarginLeftTen}>
                <div>
                    <Input
                        value={this.state.inputValue}
                        placeholder='Todo Info'
                        style={width300PXAndmarginRight10PX}
                        onChange={this.handleInputChange}
                    />
                    <Button type='primary' onClick={this.handleBtnClick}>Submit</Button>
                </div>
                <List
                    style={width300PXAndmarginTop10px}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
                >
                </List>
            </div>
        )
    }

    handleInputChange = e => {
        const action = {
            type: 'CHANGE_INPUT_VALUE',
            value: e.target.value
        }
        store.dispatch(action)
    }

    handleStoreChange = () => this.setState(store.getState())

    handleBtnClick = () => {
        const action = {
            type: 'ADD_TODO_ITEM'
        }
        store.dispatch(action)
    }


    handleItemDelete = index => {
        const action = {
            type: 'DELETE_TODO_ITEM',
            index: index
        }
        store.dispatch(action)
    }
}