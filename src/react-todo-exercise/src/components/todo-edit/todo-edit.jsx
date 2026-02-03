import { useState } from 'react'

import { Check } from 'lucide-react'

import { useTodoContext } from '../../context/todo-context.jsx'

import styles from './todo-edit.module.css'

export function TodoEdit(props) {
    const {
        initialValues,
        onSubmit,
    } = props

    const [title, setTitle] = useState(initialValues.title ?? '')

    const handleComplete = (event) => {
        event.preventDefault()
        onSubmit?.({
            ...initialValues,
            title,
        })
    }

    const handleChange = (e) => {
        setTitle(e.target.value)
        e.preventDefault()
    }

    return (
        <form
            className={styles.base}
            onSubmit={handleComplete}
        >
            <input onChange={handleChange} type="text" value={title} />
            <button type="submit">
                <Check title="Save" />
                {' '}
            </button>
        </form>
    )
}
