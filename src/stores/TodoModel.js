import { observable, action } from 'mobx'
 

export default class TodoModel {
    store
    id
    @observable title
    @observable complete

    constructor(store, title, complete, id) {
        this.title = title
        this.complete = complete
        this.id = id
        this.store = store
    }

    @action
    toggle() {
        this.complete = !this.complete
        this.store.todoLeftCount()
    }

}

