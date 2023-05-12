import * as React from "react"

const TodoList = ({todoList, markAsDone,markAsDelete,markAsEdit})=>{

    const doneBtnHandler = (id)=>{
        markAsDone(id);
    }
    const deleteBtnHandler = (id)=>{
        markAsDelete(id);
    }
    const editBtnHandler = (id)=>{
        markAsEdit(id);
    }
    
        return (
            
            <table className="table todolist table-bordered">
                <thead className="table-dark table-hover">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Todo Item</th>
                        <th scope="col">Status</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody >
                {(todoList || []).map(function(el, key){
                        return (
                            <>
                                <tr style={{backgroundColor:"#e1e6e1"}}>
                                    <td>{key + 1}</td>
                                    <td>{el.todo}</td>
                                    <td>
                                        <button onClick={()=>doneBtnHandler(el.id)} className='btn btn-success btn-sm'>
                                            Done
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={()=>deleteBtnHandler(el.id)} className='btn btn-danger btn-sm'>
                                            <span style={{color:"black"}}><b>X</b></span>
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={()=>editBtnHandler(el.id)} className='btn  btn-sm'style={{color:"black"}}>
                                            <i class="bi bi-pen-fill"></i>
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