import { TaskType } from './App';
import Button from './Button';
import { FilterValueType } from './App';

type TodolistPropsType = {
    title: string;
    tasks: TaskType[];
    removeTasks: (taskId: number) => void;
    changeFilter: (newFilterValue: FilterValueType) => void;
};

function TodoList({
    title,
    tasks,
    removeTasks,
    changeFilter,
}: TodolistPropsType) {
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
                <Button title="All" callBack={() => changeFilter('all')} />
                <Button
                    title="Active"
                    callBack={() => changeFilter('active')}
                />
                <Button
                    title="Completed"
                    callBack={() => changeFilter('completed')}
                />
            </div>
        </div>
    );
}
export default TodoList;
