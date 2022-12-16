const { 
    getAllTodos,
    createNewTodo,
    updateTodos,
    deleteTodos,
 } = require('../../models/todos.model')

async function httpGetAllTodos(req, res) {
    return res.status(200).json(await getAllTodos())
}

async function httpCreateNewTodo(req, res) {
    const todo = req.body
    const createdTodo = await createNewTodo(todo)
    if(!createdTodo.success){
        return res.status(400).json({
            error: 'Something went wrong creating todo',
          });
    }
    return res.status(201).json(createdTodo)
}

async function httpUpdateTodos(req, res) {
    const todo = req.body
    const updatedTodo = await updateTodos(todo)
    if(!updatedTodo.success){
        return res.status(400).json({
            error: 'Something went wrong updating todo',
          });
    }
    return res.status(200).json(updatedTodo)
}

async function httpDeleteTodos(req, res) {
    const uid = req.params.id
    const deletedTodo = await deleteTodos(uid)
    if(!deletedTodo.success){
        return res.status(400).json({
            error: 'Something went wrong deleting todo',
          });
    }
    return res.status(200).json(deletedTodo.success)
}

module.exports = {
    httpGetAllTodos,
    httpCreateNewTodo,
    httpUpdateTodos,
    httpDeleteTodos
}