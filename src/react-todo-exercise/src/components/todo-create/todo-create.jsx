import { useState } from 'react'

import { useTodoContext } from '../../context/todo-context.jsx'

import styles from './todo-create.module.css'

export function TodoCreate() {
    const [title, setTitle] = useState('')
    const { addTodo } = useTodoContext()

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({ title })

        addTodo(title)
        setTitle('')
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    return (
        <form className={styles.base} onSubmit={handleSubmit}>
            <input
                id="title"
                name="title"
                onChange={handleTitleChange}
                placeholder="Enter a todo"
                type="text"
                value={title}
            />
        </form>
    )
}
