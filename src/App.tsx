import { type } from 'os';
import React, { Fragment, useState } from 'react';

type FromElement = React.FormEvent<HTMLFormElement>
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([])
  const habdeleSubmit = (e: FromElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
  }

  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, { name, done: false }]
    setTasks(newTasks)
  }
  return (
    <Fragment>
      <form onSubmit={habdeleSubmit} >
        <input type="text" onChange={e => setNewTask(e.target.value)} value={newTask} />
        <button>save</button>
      </form>
      {
        tasks.map((t: ITask, i: number) => {
          return <h1 key={i}>{t.name}</h1>
        })
      }
    </Fragment>
  );
}

export default App;
