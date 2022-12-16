import {
    Route,
    Switch
} from "react-router-dom";
import Header from "../components/Header";

import TodoList from "./TodoList";
import useTodos from '../hooks/useTodos.hooks'

const AppLayout = () => {

    const {
        todos,
        isPendingTodos,
        createNewTodo,
        handleCompletedTask,
        handleEditTask,
        handleDeleteTask,
    } = useTodos();

    return (
        <div>
            <Header />
            <div style={{ padding: "20px", width: '400px', margin: 'auto' }}>
                <Switch>
                    <Route exact path="/">
                        <TodoList
                            todos={todos}
                            submitTodo={createNewTodo}
                            handleCompletedTask={handleCompletedTask}
                            handleEditTask={handleEditTask}
                            handleDeleteTask={handleDeleteTask}
                            isPendingTodos={isPendingTodos}
                        />
                    </Route>
                </Switch>

            </div>
        </div>
    );
};

export default AppLayout;