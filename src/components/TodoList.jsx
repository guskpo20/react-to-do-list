import Todo from './Todo';

function TodoList({ setTodo, todoList, eliminarTodo, setTodoList }) {
  return (
    <div>
      {todoList.length > 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Tareas</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-blue-600 font-bold ">Tareas</span>
          </p>
          {todoList.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          ))}
        </>
      ) : (
        <div>
          <h2 className="font-black text-3xl text-center">No hay tareas</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando tareas {''}
            <span className="text-blue-600 font-bold ">
              y aparecerán en este lugar
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default TodoList;
