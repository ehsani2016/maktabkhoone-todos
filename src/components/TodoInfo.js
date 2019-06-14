import React, { Component } from 'react'
import TodoStore from '../stores/TodoStore'
import { observer } from 'mobx-react'

@observer
class TodoInfo extends Component {

  clearclass(classname) {
    let elements = document.getElementsByClassName(classname);
    for (let element of elements)
      element.classList.remove(classname)
  }

  removeFilter(e) {
    TodoStore.removeFiter()
    this.clearclass('selected')
    e.target.classList.add('selected')
  }

  filterByComplete(e, iscomplete) {
    this.clearclass('selected')
    e.target.classList.add('selected')
    TodoStore.filterByComplete(iscomplete)
  }

  clearComplete() {
    TodoStore.clearComplete()
    this.clearclass('selected')
    document.getElementById("allTodos").classList.add('selected')
  }

  render() {
    return (
      <footer className="footer">
        {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count"><strong>{this.props.count}</strong> item left</span>
        {/* <!-- Remove this if you don't implement routing --> */}
        <ul className="filters">
          <li>
            <a id="allTodos" className="selected" href="#/" onClick={event => this.removeFilter(event)}>All</a>
          </li>
          <li>
            <a href="#/active" onClick={event => this.filterByComplete(event, false)}>Active</a>
          </li>
          <li>
            <a href="#/completed" onClick={event => this.filterByComplete(event, true)}>Completed</a>
          </li>
        </ul>
        {/* <!-- Hidden if no completed items are left ↓ --> */}

        <button className={`clear-completed ${TodoStore.todoCompleteLength == 0 ? 'hidden' : ''}`} onClick={() => this.clearComplete()}>Clear completed</button>
      </footer>
    )
  }
}

export default TodoInfo