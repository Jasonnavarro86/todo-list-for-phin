## Available Scripts

In the project main directory, you can run: 

### `npm install `

After all dependencies are installed, you can run: 

### `npm run start `

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



## Documentation


### `CLIENT SIDE - REACT `

 #### @ dir client/hooks/request.hooks

#### Exports:

httpGetTodos(): GET request to http://localhost:8000/todos returns todos list sorted by most recent date created

httpCreateTodo(param: object { job: ‘string’ }): POST request to http://localhost:8000/todos returns success response when a new todo item is created

httpUpdateTodos(param: object {uid: ‘existing id to match to db’,  job: ‘string’, completed: boolean }): PUT request  to http://localhost:8000/todos returns success when  todo item I updated 

httpDeleteTodo(param: `string id`): DELETE request to  http://localhost:8000/todos/:id return success when todo item is deleted 

#### @ client/hooks/useTodosFunctions.hooks

#### Exports:

todos: STATE holding todo list from firebase

isPendingTodos: STATE BOOLEAN to track when waiting for request on any  USECALLBACKS that changes todo collection in firebase

createNewTodo: USECALLBACK function to get value from input where user is creating a new todo and send to request.hook for create 

handleCompletedTodo: USECALLBACK function to change current todo.completed boolean send to request.hooks for update

handleEditTodo: USECALLBACK function to get value from input where user is editing a old todo and send to request.hooks for update 

handleDeleteTodo: USECALLBACK function send uid house for url param to request.hooks for delete


@ dir pages/AppLayout: imports TodoList Page for clientside route ‘/‘

@ dir pages/TodoList: holds basic layout of todo list page, I didn’t have anything complex enough to warrant making components for a input or a button or a label, I felt I could display more of my skill else where. The page only has 4 buttons and two inputs and 1 list. 

### `SERVER SIDE - NODE `

#### @ dir server/routes/todos

APP listens for when request come in then checks routes -> controllers -> models

I hold my todo router for .get .post .put .delete and handle those request with my todo controller in that same dir
my todo controller calls my todo model which imports firebase CRUD functions and await firebase and send response back to controller whichh can send the status code to the front request.hook


firebase setup is stored @ dir server/utils/firebase