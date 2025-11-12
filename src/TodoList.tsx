import { TaskType } from './App';
import Button from './Button';

type TodolistPropsType = {
    title: string;
    tasks: Array<TaskType>;
};

function TodoList({ title, tasks }: TodolistPropsType) {
    const tasksList = tasks.map((task) => {
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
            </li>
        );
    });

    return (
        <div className="todoList">
            <h3>{title}</h3>
            <div>
                <input />
                <Button title="+" />
            </div>
            {tasks.length === 0 ? 'задачи отсутствуют' : <ul>{tasksList}</ul>}
            <div>
                <Button title="All" />
                <Button title="Active" />
                <Button title="Completed" />
            </div>
        </div>
    );
}
export default TodoList;
