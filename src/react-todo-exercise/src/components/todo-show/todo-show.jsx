import { useState } from 'react'

import {
    ArchiveX,
    SquarePen,
} from 'lucide-react'

import { useTodoContext } from '../../context/todo-context.jsx'
import { TodoEdit } from '../todo-edit/todo-edit'

import styles from './todo-show.module.css'

export function TodoShow(props) {
    const { todo } = props
    const [showEdit, setShowEdit] = useState(false)

    const {
        removeTodo,
        updateTodo,
    } = useTodoContext()

    const handleCompleteTodo = () => {
        updateTodo(todo.id, todo.title, !todo.completed)
    }

    const handleUpdateTodo = (data) => {
        updateTodo(data.id, data.title, data.completed)
        setShowEdit(false)
    }

    const handleDeleteTodo = () => {
        removeTodo(todo.id)
    }

    const handleEdit = () => {
        setShowEdit(isEditing => !isEditing)
    }

    if (showEdit) {
        return (
            <li className={styles.base}>
                <TodoEdit
                    initialValues={todo}
                    onSubmit={handleUpdateTodo}
                />
            </li>
        )
    }

    return (
        <li
            className={styles.base}
            data-completed={todo.isCompleted}
            onDoubleClick={handleCompleteTodo}
        >
            <p data-completed={todo.completed}>{todo.title}</p>

            <div className={styles.actions}>
                <button
                    onClick={handleDeleteTodo}
                    type="button"
                >
                    <ArchiveX
                        alt="Remove todo"
                        strokeWidth={1}
                        title="Remove todo"
                    />
                </button>
                <button
                    onClick={handleEdit}
                    type="button"
                >
                    <SquarePen
                        alt="Edit todo"
                        strokeWidth={1}
                        title="Remove todo"
                    />
                </button>
            </div>
        </li>
    )
}
