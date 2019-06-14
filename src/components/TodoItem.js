import React, { Component } from 'react'
import TodoStore from '../stores/TodoStore'
import { observer } from 'mobx-react'

@observer
class TodoItem extends Component {

    onToggle(todo) {
        this.props.todo.toggle()
        // by use todostore!
        //TodoStore.toggleComplete(todo)
        //
    }

    TodoRemove(todo) {
        TodoStore.removeTodo(todo)
    }

    render() {
        const todo = this.props.todo
        return (
            <li className={todo.complete ? 'completed' : ''}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={todo.complete}
                        onChange={() => this.onToggle(todo)}
                    />
                    <label>{todo.title}</label>
                    <button className="destroy"
                        onClick={() => this.TodoRemove(todo)}
                    ></button>
                </div>
                <input className="edit" value="Create a TodoMVC template" />
            </li>
        )
    }
}

export default TodoItem