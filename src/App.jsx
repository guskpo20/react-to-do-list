import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const obtenerLS = () => {
      const todoLS = JSON.parse(localStorage.getItem('todos'));
      todoLS?.length > 0 && setTodoList(todoLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  const eliminarTodo = (id) => {
    const todosActualizados = todoList.filter((todoB) => todoB.id !== id);
    setTodoList(todosActualizados);
  };

  return (
    <div>
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
        eliminarTodo={eliminarTodo}
      />
    </div>
  );
}

export default App;
