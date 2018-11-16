import * as todo from './action'

const defaultState = {
    inputValue: '',
    list: [1, 2, 3]
}

//reducer 可接受 state，但不能修改 state
export default (state = defaultState, action) => {
    switch (action.type) {
        case todo.ADD_TODO_ITEM: {
            const newState = JSON.parse(JSON.stringify(state))
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        }
        case todo.CHANGE_INPUT_VALUE: {
            const newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value
            return newState
        }
        case todo.DELETE_TODO_ITEM: {
            const newState = JSON.parse(JSON.stringify(state))
            newState.list.splice(action.index, 1)
            return newState
        }
        default:
            return state
    }
}