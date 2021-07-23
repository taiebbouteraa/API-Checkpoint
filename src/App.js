
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserList from './UserList';

function App() {
  const [listOfUser, setListOfUser] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => { setListOfUser(res.data); })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <>
      <UserList users={listOfUser} />
    </>
  );
}

export default App;
