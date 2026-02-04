import {
    createContext,
    useContext,
    useState,
} from 'react'

import { nanoid } from 'nanoid'

const TodoContext = createContext({
    todos: [],
})

export function TodoProvider(props) {
    const { children } = props

    const [todos, setTodos] = useState([])

    const addTodo = (title) => {
        setTodos(prevTodos => [...prevTodos, {
            id: nanoid(),
            isCompleted: false,
            title,
        }])
    }

    const removeTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    }

    const updateTodo = (id, title, isCompleted = false) => {
        setTodos(prevTodos => prevTodos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isCompleted,
                    title,
                }
            }

            return todo
        }))
    }

    return (
        <TodoContext.Provider
            value={{
                addTodo,
                removeTodo,
                todos,
                updateTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export function useTodoContext() {
    return useContext(TodoContext)
}
