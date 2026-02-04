import { Header } from './components/header/header'
import { Main } from './components/main/main'
import { TodoProvider } from './context/todo-context'

import './App.css'

export function App() {
    return (
        <TodoProvider>
            <Header />
            <Main />
        </TodoProvider>
    )
}
