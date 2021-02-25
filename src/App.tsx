import React, { Fragment, useState } from 'react';

function App(): JSX.Element {
  const [newTask, setNewTask] = useState('');
  return (
    <Fragment>
      <form>
        <input type="text" onChange={e => console.log(e.target.value)} />
      </form>
    </Fragment>
  );
}

export default App;
