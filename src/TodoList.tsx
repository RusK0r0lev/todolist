import { TaskType } from './App';
import Button from './Button';
import { FilterValueType } from './App';
import { ChangeEvent, useState } from 'react';

type TodolistPropsType = {
    title: string;
    tasks: TaskType[];
    removeTasks: (taskId: string) => void;
    changeFilter: (newFilterValue: FilterValueType) => void;
    addTask(title: string): void;
};

function TodoList({
    title,
    tasks,
    removeTasks,
    changeFilter,
    addTask,
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

    const [input, setInput] = useState('');

    function onChangeInputHandler(event: ChangeEvent<HTMLInputElement>) {
        setInput(event.currentTarget.value);
    }
    function onClickButtonHandler() {
        addTask(input), setInput(' ');
    }

    return (
        <div className="todoList">
            <h3>{title}</h3>
            <div>
                <input value={input} onChange={onChangeInputHandler} />
                <Button title="+" callBack={() => onClickButtonHandler()} />
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
