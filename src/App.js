import firebase from 'firebase'
import './App.css';
import { Button, Input } from '@material-ui/core';
import { useState } from 'react';
// import db from './config/firebase/firebaseConfig';

function App() {
  const [input, setInput] = useState("");

  const addTodo =  (e) =>{
    e.preventDefault();
    // db.collection('todos').add({
    //   todo:input, 
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // })
    setInput('');
  }

  return (
    <div className="App">
    <div className = "card"> 
    <h1>Todo App</h1>
    <from>
    <Input placeholder="Enter yout Todo" onChange={e => setInput(e.target.value)} value={input}  />
    <Button variant="contained">Add Todo</Button>
    </from>
    <div className = "card">
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>todo</th>
            <th scope='col'></th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>hello</th>
            <th><Button variant="contained">update</Button></th>
            <th> <Button variant="outlined" color="error">Delete
      </Button></th>
          </tr>
        </tbody>
      </table>
       </div>
    </div>
    </div>
  );
}

export default App;
