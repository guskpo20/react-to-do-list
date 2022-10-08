import { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';

function Todo({ todo, todoList, setTodoList }) {
  const [complete, setComplete] = useState(false);
  const [editando, setEditando] = useState(false);
  const handleComplete = () => {
    if (!editando) {
      setComplete(!complete);
    }
  };

  const handleDelete = (id) => {
    const todosActualizados = todoList.filter((todoB) => todoB.id !== id);
    setTodoList(todosActualizados);
  };

  const handleEdit = (id) => {
    // Editando el Registro
    setEditando(true);
    let nuevaTarea = prompt('Actualizar Tarea');
    if (nuevaTarea) {
      let nuevoObjeto = {
        id: todo.id,
        text: nuevaTarea,
      };

      const todoActualizados = todoList.map((todoState) =>
        todoState.id === todo.id ? nuevoObjeto : todoState
      );

      setTodoList(todoActualizados);
    } else {
      alert('Ingrese nueva tarea');
    }
    setEditando(false);
  };

  return (
    <div className="flex w-full justify-center">
      <div
        className={`flex w-96  align-middle hover:cursor-pointer my-5 py-10 px-10font-black rounded-lg ${
          complete
            ? `hover:bg-green-900 bg-green-500 justify-around`
            : ` hover:bg-blue-900 bg-blue-600 font-black justify-between`
        } shadow-xl `}
        id={todo.id}
        onClick={handleComplete}
      >
        {!complete ? (
          <AiOutlineEdit
            className="text-yellow-600 font-bold hover:text-yellow-900 hover:cursor-pointer ml-5"
            size={35}
            onClick={() => handleEdit(todo.id)}
          />
        ) : (
          <></>
        )}
        <h3 className={`  rounded-lg text-white text-center max-char`}>
          {todo.text}
        </h3>

        <RiDeleteBinLine
          onClick={() => handleDelete(todo.id)}
          className="text-red-600 font-bold hover:text-red-900 hover:cursor-pointer mr-5"
          size={35}
        />
      </div>
    </div>
  );
}

export default Todo;
