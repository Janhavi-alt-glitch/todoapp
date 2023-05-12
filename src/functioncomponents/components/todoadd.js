import * as React from "react"

const TodoAdd = ({update})=>{
   
        const [todoText, setTodoText] = React.useState('');
        
        const onSave = ()=>{
            update(todoText);
            setTodoText('');

        }
    
        const onChangeHandler = (e)=>{
            setTodoText(e.target.value);
        }
    
    return (
        <div className="input-group mb-3 todoadd">
            <input type="text" className="form-control" value={todoText} placeholder="Add Task" aria-label="Recipient's username" aria-describedby="button-addon2"  onChange={onChangeHandler}/>
            <button onClick={onSave} className="btn btn-outline-secondary" type="button" id="button-addon2">Save</button>
        </div>

    );
}

export default TodoAdd