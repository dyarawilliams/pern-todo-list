import React, { Fragment } from 'react';

// Components
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
        <footer className='py-3 px-2 w-100 position-fixed bottom-0 text-center'>
          Made with ❤️ by <a href='https://dyarawilliams.github.io'>D'yara Williams</a>
        </footer>
      </div>
    </Fragment> 
  );
}

export default App;
