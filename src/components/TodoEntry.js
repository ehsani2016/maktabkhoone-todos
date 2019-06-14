import React, { Component } from 'react'
import TodoStore from '../stores/TodoStore'


class TodoEntry extends Component {
    state = {
        value: ''
    }

    handlekeydown = (event) => {
        if (event.keyCode !== 13 || this.state.value === '')
            return;
        event.preventDefault();
        TodoStore.addTodo(this.state.value)
        this.setState({
            value: ''
        })
    }
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" placeholder="What needs to be done?"
                    value={this.state.value}
                    onChange={event => this.setState({ value: event.target.value })}
                    onKeyDown={
                        event => this.handlekeydown(event)
                    }
                />
            </header>
        )
    }
}

export default TodoEntry