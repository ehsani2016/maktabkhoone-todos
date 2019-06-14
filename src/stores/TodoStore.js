import { observable, action } from 'mobx'
import TodoModel from './TodoModel'

class TodoStore {
    @observable todos = []
    @observable todoLength = 0
    @observable todoCompleteLength = 0

    todosAll = []
    lastId = 0
    filterStateIsComplete = false

    @action
    todoLeftCount() {
        let arr = this.todosAll.filter(function (todo) {
            return (todo.complete === false)
        })

        this.todoLength = arr.length;
        this.todoCompleteLength = this.todosAll.length - arr.length
    }

    @action
    addTodo(title) {
        this.todosAll.push(new TodoModel(this, title, false, this.lastId++))
        if (this.filterStateIsComplete === false)
            this.todos = this.todosAll
        this.todoLeftCount()
    }

    @action
    removeTodo(todo) {
        let index = this.todosAll.indexOf(todo);
        if (index > -1) {
            this.todosAll.splice(index, 1)
            if (todo.complete === false)
                this.todoLeftCount()

            this.todos = this.todosAll
        }
    }

    // Implement todo Left Count by todoStore
    // @action
    // toggleComplete(todo) {
    //     let index = this.todos.indexOf(todo);
    //     if (index > -1) {
    //         todo.complete = !todo.complete
    //         this.todos[index] = todo
    //         this.todoLeftCount()
    //     }
    // }
    //

    @action
    removeFiter() {
        this.todos = this.todosAll
        this.filterStateIsComplete = false
    }

    @action
    filterByComplete(isComplete) {
        let arr = this.todosAll.filter(function (todo) {
            return (todo.complete === isComplete)
        })

        this.filterStateIsComplete = isComplete
        this.todos = arr
        return arr
    }

    @action
    clearComplete() {
        this.todosAll = this.filterByComplete(false)
        this.todos = this.todosAll
        this.todoCompleteLength = 0
    }
}

const store = new TodoStore()

export default store
