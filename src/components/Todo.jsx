import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';

function Todo({ todo, setTodo, key, eliminarTodo }) {
  return (
    <div className="flex w-full justify-center ">
      <h3 className="flex gap-3 py-2 px-4 rounded-lg w-80 justify-between bg-blue-600 font-black text-white text-2xl text-center ">
        <AiOutlineEdit className="text-yellow-600 font-bold hover:text-yellow-900 hover:cursor-pointer" />
        {todo.text}
        <RiDeleteBinLine className="text-red-600 font-bold hover:text-red-900 hover:cursor-pointer" />
      </h3>
    </div>
  );
}

export default Todo;
