import * as React from "react"

const TodoList = ({todoList, markAsDone})=>{

    const doneBtnHandler = (id)=>{
        markAsDone(id);
    }
    
    
        return (
            
            <table className="table todolist table-bordered ">
                <thead className="table-dark table-hover">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Todo Item</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody >
                {(todoList || []).map(function(el, key){
                        return (
                            <>
                                <tr className={el.status === 2?'hidden':''}>
                                    <td>{key + 1}</td>
                                    <td>{el.todo}</td>
                                    <td>
                                        <button onClick={()=>doneBtnHandler(el.id)} className='btn btn-success btn-sm'>
                                            Done
                                        </button>
                                    </td>
                                </tr>
                            
                            </>
                        )}
                )}

                </tbody>
            </table>

        );
    }



export default TodoList