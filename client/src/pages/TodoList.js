import React, { useMemo } from "react";
import './todolist.styles.css'

const TodoList = ({
    todos,
    handleCompletedTodo,
    handleEditTodo,
    handleDeleteTodo,
    submitTodo,
    isPendingTodos,
    showEditComponent,
    todoItemToEdit,
}) => {

    const listBody = useMemo(() => {
        return todos?.map((todo) => {
            return (
                <li key={todo.uid} className='todo-list-li'>
                    <label>
                        <input type="checkbox" defaultChecked={todo.completed} onClick={() => handleCompletedTodo({ ...todo, completed: !todo.completed })} />
                        {todo.completed ? <s>{todo.job}</s> : <>{todo.job}</>}
                    </label>
                    <button className="todo-list-button" onClick={() => showEditComponent(todo)}>Edit</button>
                    <button className="todo-list-button" onClick={() => handleDeleteTodo(todo.uid)}>Delete</button>
                </li>
            )
        }
        );
    }, [todos, handleCompletedTodo, handleDeleteTodo, showEditComponent]);

    return (
        <div>
            {!todoItemToEdit.uid ?
                <div>
                    <h1>Todo List:</h1>
                    <ul className="todo-list-ul">
                        {listBody}
                    </ul>

                    <form id="add-todo-list-form" onSubmit={submitTodo}>
                        <hr />
                        <br />
                        <label htmlFor="todo-job">Enter Todo:</label>
                        <br />
                        <input type="text" id="todo-job" name="todo-job" />
                        <button type="submit" layer="success" disabled={isPendingTodos}>
                            Add Todo ✔
                        </button>
                        {isPendingTodos &&
                            <p>Loading...</p>
                        }
                    </form>
                </div>
                :
                <form id="edit-todo-list-form" onSubmit={(e) => handleEditTodo(e, todoItemToEdit)}>
                    <label htmlFor="todo-job-edit">Edit Todo:</label>
                    <br />
                    <input type="text" id="todo-job-edit" name="todo-job-edit" placeholder={todoItemToEdit.job} />
                    <button type="submit" layer="success">
                        Edit Todo ✔
                    </button>
                </form>

            }
        </div>
    )
};

export default TodoList;