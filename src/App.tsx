import './App.css';
import TodoList from './TodoList';

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
};

function App() {
    const todolistTitle_1 = 'Что изучить?';
    const todolistTitle_2 = 'Что прочитать?';
    const todolistTitle_3 = 'Что купить?';

    const tasks: Array<TaskType> = [
        // { id: 1, title: 'HTML&CSS', isDone: true },
        // { id: 2, title: 'JS', isDone: false },
        // { id: 3, title: 'React', isDone: false },
    ];
    const tasks2: Array<TaskType> = [
        { id: 1, title: 'Блок', isDone: true },
        { id: 2, title: 'Ахматова', isDone: false },
        { id: 3, title: 'Толстой', isDone: false },
    ];
    const tasks3: Array<TaskType> = [
        { id: 1, title: 'Молоко', isDone: true },
        { id: 2, title: 'Сметана', isDone: false },
        { id: 3, title: 'Сыр', isDone: false },
    ];

    return (
        <div className="app">
            <TodoList title={todolistTitle_1} tasks={tasks} />
            <TodoList title={todolistTitle_2} tasks={tasks2} />
            <TodoList title={todolistTitle_3} tasks={tasks3} />
        </div>
    );
}

export default App;
