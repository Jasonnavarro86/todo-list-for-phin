import { useCallback, useEffect, useState } from "react";
import { httpGetTodos, httpCreateTodo, httpUpdateTodos, httpDeleteTodo } from "./requests.hooks";

function useTodosFunctions() {

    const [todos, saveTodos] = useState([]);
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
    const handleCompletedTask = useCallback(async (todo) => {
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
    const handleEditTask = useCallback(async (e, todo) => {
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
            setTimeout(() => {
                setIsPendingTodos(false);
            }, 600);
        }
        return
    }, [getTodos]);

    // delete todo 
    const handleDeleteTask = useCallback(async (uid) => {
        setIsPendingTodos(true);

        const response = await httpDeleteTodo(uid);
        const success = response.ok;
        if (success) {
            getTodos()
            setTimeout(() => {
                setIsPendingTodos(false);
            }, 600);
        }
        return
    }, [getTodos]);

    return {
        todos,
        isPendingTodos,
        createNewTodo,
        handleCompletedTask,
        handleEditTask,
        handleDeleteTask,
    };
}

export default useTodosFunctions;
