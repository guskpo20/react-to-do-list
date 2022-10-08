import { useState } from 'react';
import { generarId } from '../helpers/index';
import Error from './Error';

function TodoForm({ todo, setTodo, todoList, setTodoList }) {
  const [error, setError] = useState(false);
  const handleSubmit = () => {
    if (!todo) {
      setError(true);
      return;
    }
    setError(false);

    console.log('Creando');
    // Nuevo registro
    let todoNuevo = {
      text: todo,
      id: generarId(),
    };
    setTodoList([...todoList, todoNuevo]);
    setTodo('');
  };

  return (
    <div className="bg-dark w-full flex justify-center mt-28 mb-16">
      <div className="w-full max-w-xs">
        <h2 className="font-black text-3xl text-center mb-5">
          Tus <span className="text-blue-600">Tareas</span> Para Hoy!
        </h2>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Ingresa tarea"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className=" mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            className="  bg-blue-600 hover:bg-blue-900 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline w-15 h-10"
            onClick={handleSubmit}
          >
            Agregar!
          </button>
        </div>
        {error && (
          <Error>
            <p>Ingrese una Tarea!</p>
          </Error>
        )}
      </div>
    </div>
  );
}

export default TodoForm;
