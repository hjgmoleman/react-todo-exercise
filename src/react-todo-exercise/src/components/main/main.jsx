import { TodoCreate } from '../todo-create/todo-create'
import { TodoList } from '../todo-list/todo-list'

import styles from './main.module.css'

export function Main() {
    return (
        <main className={styles.base}>
            <TodoList />
            <TodoCreate />
        </main>
    )
}
