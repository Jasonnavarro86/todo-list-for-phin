import {
    Route,
    Switch
} from "react-router-dom";
import Header from "../components/Header";

import TodoList from "./TodoList";
import useTodosFunctions from '../hooks/useTodosFunctions.hooks'

const AppLayout = () => {

    const {
        todos,
        isPendingTodos,
        todoItemToEdit,
        createNewTodo,
        handleCompletedTodo,
        handleEditTodo,
        handleDeleteTodo,
        showEditComponent,
    } = useTodosFunctions();

    return (
        <div>
            <Header />
            <div style={{ padding: "20px", width: '400px', margin: 'auto' }}>
                <Switch>
                    <Route exact path="/">
                        <TodoList
                            todos={todos}
                            submitTodo={createNewTodo}
                            handleCompletedTodo={handleCompletedTodo}
                            handleEditTodo={handleEditTodo}
                            showEditComponent={showEditComponent}
                            handleDeleteTodo={handleDeleteTodo}
                            todoItemToEdit={todoItemToEdit}
                            isPendingTodos={isPendingTodos}
                        />
                    </Route>
                </Switch>

            </div>
        </div>
    );
};

export default AppLayout;