import Header from "./components/Header"
import Card from "./components/Card"
import Todocontainer from "./components/Todocontainer"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Signup from "./Pages/Sighnup"
import Landing from "./Pages/Landing"
import {useState} from "react"

function App() {
  const [users, setusers] = useState(
    [
      {
        username: "jhon",
        password: "123"
      },
      {
        username: "abc",
        password: "123"
      }
    ]
  )
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
          <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
