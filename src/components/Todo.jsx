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
    <div className="flex w-full justify-center  align-middle">
      {!complete ? (
        <div className=" h-auto rounded-l-lg w-16 flex justify-center my-auto">
          <AiOutlineEdit
            className="text-yellow-600  font-bold hover:text-yellow-900 hover:cursor-pointer "
            size={35}
            onClick={() => handleEdit(todo.id)}
          />
        </div>
      ) : (
        <></>
      )}
      <div
        className={`flex w-96  hover:cursor-pointer my-5 py-10 font-black justify-center ${
          complete
            ? `hover:bg-green-900 bg-green-500`
            : ` hover:bg-slate-300 bg-slate-400 font-black `
        } shadow-xl rounded-lg`}
        id={todo.id}
        onClick={handleComplete}
      >
        <h3 className={`rounded-lg text-blue-600 text-center max-char`}>
          {todo.text}
        </h3>
      </div>
      <div className=" h-auto rounded-l-lg w-16 flex justify-center my-auto">
        <RiDeleteBinLine
          onClick={() => handleDelete(todo.id)}
          className=" text-red-600 font-bold hover:text-red-900 hover:cursor-pointer "
          size={35}
        />
      </div>
    </div>
  );
}

export default Todo;
