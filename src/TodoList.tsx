import { TaskType } from './App';
import Button from './Button';

type TodolistPropsType = {
    title: string;
    tasks: TaskType[];
    removeTasks: (taskId: number) => void;
};

function TodoList({ title, tasks, removeTasks }: TodolistPropsType) {
    const tasksList =
        tasks.length === 0
            ? 'задачи отсутствуют'
            : tasks.map((tasks: TaskType) => {
                  return (
                      <li key={tasks.id}>
                          <input type="checkbox" checked={tasks.isDone} />
                          <span>{tasks.title}</span>
                          <button onClick={() => removeTasks(tasks.id)}>
                              x
                          </button>
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
            <ul>{tasksList}</ul>
            <div>
                <Button title="All" />
                <Button title="Active" />
                <Button title="Completed" />
            </div>
        </div>
    );
}
export default TodoList;
