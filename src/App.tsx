import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v1 } from 'uuid';

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
};

export type FilterValueType = 'all' | 'active' | 'completed';

function App() {
    const todolistTitle_1 = 'Что изучить?';

    const initialState: TaskType[] = [
        { id: v1(), title: 'HTML&CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: false },
        { id: v1(), title: 'React', isDone: true },
    ];
    const [tasks, setTasks] = useState(initialState);

    function removeTasks(taskId: string) {
        setTasks(tasks.filter((el) => el.id !== taskId));
    }

    function addTask(title: string) {
        const newTask: TaskType = {
            id: v1(),
            title,
            isDone: false,
        };
        setTasks([newTask, ...tasks]);
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
                addTask={addTask}
            />
        </div>
    );
}
export default App;
