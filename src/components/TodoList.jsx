import Todo from './Todo';

function TodoList(setTodo, todoList, eliminarTodo) {
  return (
    <div>
      {todoList && todoList.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Tareas</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-blue-600 font-bold ">Tareas</span>
          </p>
          {todoList.map((todo) => {
            <Todo
              todo={todo}
              setTodo={setTodo}
              key={todo.id}
              eliminarTodo={eliminarTodo}
            />;
          })}
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
