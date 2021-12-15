import './Todo.css'
import {useState} from 'react'

import Todolist from "../TodoList/TodoList";

import TodoCreate from '../TodoCreate/TodoCreate';

const Todo = () => {

    const [getTodos, setTodos] = useState([
        { id: 1, title : 'Eat'},
        { id: 2, title : 'Sleep'},
        { id: 3, title : 'Code'},
        { id: 4, title : 'Bath'},
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo));
        console.log(getTodos);
    }

    return (
        <div>
            <h3> To Do List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <Todolist dataTodos={getTodos}/>
        </div>
    );
}

export default Todo