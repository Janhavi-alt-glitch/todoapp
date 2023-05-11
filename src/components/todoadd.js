import * as React from "react"

class TodoAdd extends React.Component {
    constructor(props) {
        super(props);   
        this.state = {
            todo: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSave = this.onSave.bind(this);

    }
    onChangeHandler(event) {
        this.setState({
            todo: event.target.value
        });
    }

onSave()
{
    
    this.props.update(this.state.todo);
}

render(){
    return (
        <div className="input-group mb-3 todoadd">
            <input type="text" className="form-control" placeholder="Add Task" aria-label="Recipient's username" aria-describedby="button-addon2"  onChange={this.onChangeHandler}/>
            <button onClick={this.onSave} className="btn btn-outline-secondary" type="button" id="button-addon2">Save</button>
        </div>

    );
}
}

export default TodoAdd