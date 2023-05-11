
import * as React from "react"
import TodoList from "./todolist.js"
import TodoAdd from "./todoadd.js"

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        }

        this.updateTodoState=this.updateTodoState.bind(this);
    }
    updateTodoState(todoText) {
        this.setState({
            todoList: [...this.state.todoList, {
                id: Date.now(),
                todo: todoText
            }]

        }
        );

    }

    render() {
        return (
            <div className="table todo container-fluid">
                
                <h1>TODO APP <i class="bi bi-list-task"></i></h1>
                <TodoAdd update={this.updateTodoState} />
                <TodoList todoList={this.state.todoList} />
            </div>
        );
    }

}

export default Todo