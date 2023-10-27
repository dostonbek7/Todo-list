import {area, btn, row, text} from './Form.module.css'
import { useState, useRef } from "react"

function Form({addTodos }) {
  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(null)
  const form = useRef()

const handleSubmit = (e) =>{
  e.preventDefault()
  addTodos({
    id: Math.random(),
    title: title,
    completed: Boolean(Number(completed))
  })
  form.current.reset()
}

  return (
    <>
  <form className={area} ref={form} onSubmit={handleSubmit}>
    <input className={text} type="text" onChange={ (e) => setTitle(e.target.value) }/>
    <label>
      <div className={row}>
      <span className={row.span}>Completed:</span>
      <input className={row.input} type="radio" name="status" value={1} onChange={(e) => setCompleted(e.target.value)} />
      </div>
      <div className={row}>
      <span className={row.span}>Uncompleted:</span>
      <input className={row.input} type="radio" name="status" value={0} onChange={(e) => setCompleted(e.target.value)} />
      </div>
    </label>
    <button className={btn}>Add</button>
  </form>
    </>
  )
}

export default Form