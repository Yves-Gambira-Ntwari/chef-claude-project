import Chef from "./chefCloude/Chef"
import "./style.css"


export default function App() {

  return (
    <>
    <Chef />
    </>
  )
}

































// import { useState } from "react"
// export default function App() {
//   const [newItem, setNewItem] = useState("yes")
//   const [todos, setTodos] = useState([])

//   function handlesubmit(e) {
//     e.preventDefault()
//     setTodos(currentTodos => {
//       return [
//         ...currentTodos,
//         { id: crypto.randomUUID(), title: newItem, complete: false }
//       ]
//     })
//   }
//   function toggleTodo(id, complete) {
//     setTodos(currentTodos => {
//       return currentTodos.map(todo => {
//         if (todo.id === id) {
//           return { ...todo, complete }
//         }
//         return todo
//       })
//     })
//   }

//   function deleteTodo(id) {
//     setTodos(currentTodos => {
//       return currentTodos.filter(todo => todo.id != id)
//     })
//   }

//   return (
//     <>
//       <form onSubmit={handlesubmit} className="new-item-form">
//         <label htmlFor="item">New Item</label>
//         <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} id="item" />
//         <button className="btn">Add</button>
//       </form>
//       <h1 className="header">Todo list</h1>
//       <ul className="list">
//         {todos.length === 0 && "No Todos"}
//         {todos.map(todo => {
//           return (
//             <li key={todo.id}>
//               <label><input type="checkbox" checked={todo.complete}
//                 onChange={e => toggleTodo(todo.id, e.target.checked)} name="" id="" />
//                 {todo.title}
//               </label>
//               <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
//             </li>
//           )
//         })}

//       </ul>

//     </>
//   )
// }