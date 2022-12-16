const express = require('express');

const { 
    httpGetAllTodos,
    httpCreateNewTodo,
    httpUpdateTodos,
    httpDeleteTodos,
} = require('./todos.controller');

const todosRouter = express.Router();

todosRouter.get('/todos', httpGetAllTodos);
todosRouter.post('/todos', httpCreateNewTodo);
todosRouter.put('/todos', httpUpdateTodos);
todosRouter.delete('/todos/:id', httpDeleteTodos);

module.exports = todosRouter;