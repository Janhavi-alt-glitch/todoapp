import * as React from "react"

class TodoList extends React.Component {
    deletetodo=index=>{
        const newtodos=this.state.filter((todo,i)=>{
            if(index===i){
                return false;
            }
            return true;
        });
        this.setState({
            todos:newtodos
        })
            }
    

    render() {
        
            
        
        return (
            
            <table className="table todolist table-bordered ">
                <thead className="table-dark table-hover">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Todo Item</th>

                    </tr>
                </thead>
                <tbody >

                    {(this.props.todoList || []).map(function (el) {
                        return (
                            <tr>
                                <td>{el.id}</td>
                                <td>{el.todo}</td>
                                
                            </tr>
                        )
                    })}


                </tbody>
            </table>

        );
    }

}

export default TodoList