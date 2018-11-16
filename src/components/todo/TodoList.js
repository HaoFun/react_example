import React, { Component, Fragment } from 'react'
import { Button, Input, ListGroup } from 'reactstrap';
import TodoItem from './TodoItem'
import Test from './Test'
import axios from 'axios'

export default class TodoList extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    // Component 即將被掛載時執行
    componentWillMount() {
        console.log('componentWillMount---TodoList')
    }

    // Component 被掛載完時執行 (after render)
    componentDidMount() {
        const response = this.axiosGet('http://uat-return-labelservice.contin-testing-site.com/api')
        console.log(Promise.resolve(response))
        console.log('componentDidMount---TodoList')
    }

    async axiosGet(url) {
        const response = await axios.get(url)
            .then((response) => response.data)
            .catch((response) => response.message.data)
        return response
    }

    // Component 更新時執行，return true 才更新
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate---TodoList')
        return true
    }

    componentWillUpdate() {
        console.log('componentWillUpdate---TodoList')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate---TodoList')
    }

    render() {
        return (
            <Fragment>
                <div className={'d-flex flex-row'}>
                    <Input
                        placeholder="Write something..."
                        type="text"
                        id="insertArea"
                        className={'col-md-3'}
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input = input}}
                    />
                    <Button color={'primary'} onClick={this.handleBtnClick}>Submit</Button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.todoItems()}
                </ul>
                <Test content={this.state.inputValue}/>
            </Fragment>
        )
    }

    todoItems = () => {
        return this.state.list.map((item, index) => (
                <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete}
                />))
    }

    handleInputChange = e => {
        const value = e.target.value
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick = () => {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), () => {
            console.log(this.ul.querySelectorAll('div').length)
        })
    }

    handleItemDelete = index => {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {list}
        })
    }
}