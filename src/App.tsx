import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
};

export type FilterValueType = 'all' | 'active' | 'completed';

function App() {
    const todolistTitle_1 = 'Что изучить?';

    const initialState: TaskType[] = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: false },
        { id: 3, title: 'React', isDone: true },
    ];
    const [tasks, setTasks] = useState(initialState);

    function removeTasks(taskId: number) {
        setTasks(tasks.filter((el) => el.id !== taskId));
        console.log(tasks);
    }

    const [filter, setFilter] = useState<FilterValueType>('all');

    let filteredTasksForTodo: TaskType[] = tasks;
    if (filter === 'active') {
        filteredTasksForTodo = tasks.filter((t) => !t.isDone);
    }
    if (filter === 'completed') {
        filteredTasksForTodo = tasks.filter((t) => t.isDone);
    }

    function changeFilter(newFilterValue: FilterValueType) {
        setFilter(newFilterValue);
    }

    return (
        <div className="app">
            <TodoList
                title={todolistTitle_1}
                tasks={filteredTasksForTodo}
                removeTasks={removeTasks}
                changeFilter={changeFilter}
            />
        </div>
    );
}
export default App;
