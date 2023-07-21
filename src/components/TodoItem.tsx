"use client"

type todoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
}

const TodoItem = ({ id, title, complete, toggleTodo }: todoItemProps) => {
  return (
    <li className='flex gap-1 items-center'>
      <input
        type='checkbox'
        name=''
        id={id}
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
        className='cursor-pointer peer'
      />
      <label
        htmlFor={id}
        className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'
      >
        {title}
      </label>
    </li>
  )
}
export default TodoItem
