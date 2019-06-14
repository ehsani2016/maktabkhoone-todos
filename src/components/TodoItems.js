import React, { Component } from 'react'
import TodoItem from './TodoItem'
import TodoStore from '../stores/TodoStore'
import TodoInfo from './TodoInfo'
import { observer } from 'mobx-react'

@observer
class TosoItems extends Component {
    render() {
        return (
            <div>
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox" />
                    <label for="toggle-all">Mark all as complete</label>
                    <ul className="todo-list">

                        {
                            TodoStore.todos.map(todo => {
                                return (
                                    <TodoItem todo={todo} />
                                )
                            }
                            )
                        }

                    </ul>
                </section>

                {/* <!-- This footer should hidden by default and shown when there are todos --> */}
                <div className={`${(TodoStore.todoLength === 0 && TodoStore.todoCompleteLength === 0) ? 'hidden' : ''}`}>
                    <TodoInfo count={TodoStore.todoLength} />
                </div>
            </div>
        )
    }
}

export default TosoItems