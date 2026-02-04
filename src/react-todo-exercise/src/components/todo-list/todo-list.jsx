import { useTodoContext } from '../../context/todo-context'
import { TodoShow } from '../todo-show/todo-show'

import styles from './todo-list.module.css'

export function TodoList() {
    const { todos } = useTodoContext()

    return (
        <ul className={styles.base}>
            { todos.map(todo => (
                <TodoShow
                    key={todo.id}
                    on
                    todo={todo}
                />
            ))}
        </ul>
    )
}
