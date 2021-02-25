import React, { Fragment, useState } from 'react';

function App(): JSX.Element {
  const [newTask, setNewTask] = useState('');
  const habdeleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submiting")
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
