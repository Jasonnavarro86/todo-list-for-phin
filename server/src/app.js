const express = require('express');
const cors = require('cors')
const todosRouter = require('./routes/todos/todos.router');

const app = express();

app.use(cors())
app.use(express.json());

app.use(todosRouter)

module.exports = app;