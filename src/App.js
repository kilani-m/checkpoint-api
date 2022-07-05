import axios from 'axios';
import { useState, useEffect } from 'react';
import UserList from './component/userList/UserList';

function App() {
  const [listOfUSer, setListOfUSer ] = useState([])

  const  getUser = async() =>{
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setListOfUSer(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
getUser()
  }, [])
  
  return (
<UserList listOfUSer={listOfUSer} />
  );
}

export default App;
