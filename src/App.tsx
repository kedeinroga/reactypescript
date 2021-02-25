import { type } from 'os';
import React, { Fragment, useState } from 'react';

type FromElement = React.FormEvent<HTMLFormElement>

function App(): JSX.Element {
  const [newTask, setNewTask] = useState('');
  const habdeleSubmit = (e: FromElement) => {
    e.preventDefault();
    console.log(newTask)
  }
  return (
    <Fragment>
      <form onSubmit={habdeleSubmit} >
        <input type="text" onChange={e => setNewTask(e.target.value)} />
        <button>save</button>
      </form>
    </Fragment>
  );
}

export default App;
