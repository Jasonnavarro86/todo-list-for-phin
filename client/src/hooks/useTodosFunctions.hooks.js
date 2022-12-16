import { useCallback, useEffect, useState } from "react";
import { httpGetTodos, httpCreateTodo, httpUpdateTodos, httpDeleteTodo } from "./requests.hooks";

function useTodosFunctions() {

    const [todos, saveTodos] = useState([]);
    const [todoItemToEdit, setTodoItemToEdit] = useState({});
    const [isPendingTodos, setIsPendingTodos] = useState(false);

    // fetch all todos that are not completed from our api
    const getTodos = useCallback(async () => {
        const fecthedTodos = await httpGetTodos();
        saveTodos(fecthedTodos);
    }, []);

    useEffect(() => {
        getTodos();
    }, [getTodos]);


    // send and save the new todo item
    const createNewTodo = useCallback(async (e) => {
        e.preventDefault();
        setIsPendingTodos(true);

        const data = new FormData(e.target);
        const job = data.get("todo-job");
        const response = await httpCreateTodo({ job });
        const success = response.ok;
        if (success) {
            getTodos()
            document.getElementById("add-todo-list-form").reset();
            setTimeout(() => {
                setIsPendingTodos(false);
            }, 600);
        }
        return
    }, [getTodos]);

    // send completed todo to api
    const handleCompletedTodo = useCallback(async (todo) => {
        setIsPendingTodos(true);

        const response = await httpUpdateTodos({
            ...todo
        });
        const success = response.ok;
        if (success) {
            getTodos()
            setTimeout(() => {
                setIsPendingTodos(false);
            }, 600);
        }
        return
    }, [getTodos]);


    // send edited todo to api
    const handleEditTodo = useCallback(async (e, todo) => {
        e.preventDefault();
        setIsPendingTodos(true);

        const data = new FormData(e.target);
        const job = data.get("todo-job-edit");
 
        const response =  await httpUpdateTodos({
            ...todo,
            job,
         
        });
        const success = response.ok;
        if (success) {
            getTodos()
            setTodoItemToEdit({})
            setTimeout(() => {
                setIsPendingTodos(false);
            }, 600);
        }
        return
    }, [getTodos]);

    const showEditComponent = useCallback(todo => {
        setTodoItemToEdit(todo);
    }, []);

    // delete todo 
    const handleDeleteTodo = useCallback(async (uid) => {
        setIsPendingTodos(true);

        const response = await httpDeleteTodo(uid);
        const success = response.ok;
        if (success) {
            getTodos()
            setTimeout(() => {
                setIsPendingTodos(false);
            }, 100);
        }
        return
    }, [getTodos]);

    return {
        todos,
        isPendingTodos,
        todoItemToEdit,
        createNewTodo,
        handleCompletedTodo,
        handleEditTodo,
        handleDeleteTodo,
        showEditComponent,
    };
}

export default useTodosFunctions;
