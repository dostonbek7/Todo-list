import {list, listitem, title, remove} from './TodoList.module.css'

function TodoList({todos, handleDelete}) {
  return (
    <ul className={list}>
      {todos.map((todo)=>{
        return(
          <li key={todo.id} className={listitem}>
            <h2 className={title}>{todo.title}</h2>
            <p>{todo.completed ? "✅" : "❌"}</p>
            <button className={remove} onClick={ () =>handleDelete(todo.id)}>Delete</button>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList