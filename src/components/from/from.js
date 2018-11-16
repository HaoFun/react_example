import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import '../../styles/index.css'

export default class From extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames={'fade'}
                                    unmountOnExit
                                    onEntered={(el) => {el.style.color='blue'}}
                                    appear={true}
                                    key={index}
                                >
                                    <div><h1>{item}</h1></div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={this.handleToggle}>Toggle</button>
            </Fragment>
        )
    }

    handleToggle = () => {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
}