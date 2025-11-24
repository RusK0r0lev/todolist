import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
};

function App() {
    const todolistTitle_1 = 'Что изучить?';

    const initialState: TaskType[] = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: false },
        { id: 3, title: 'React', isDone: false },
    ];
    const [tasks, setTasks] = useState(initialState);

    function removeTasks(taskId: number) {
        setTasks(tasks.filter((el) => el.id !== taskId));
        console.log(tasks);
    }

    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

    return (
        <div className="app">
            <TodoList
                title={todolistTitle_1}
                tasks={tasks}
                removeTasks={removeTasks}
            />
        </div>
    );
}
export default App;
