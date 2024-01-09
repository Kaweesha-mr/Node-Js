/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateUsers from "./components/createUsers.jsx";
import UpdateUsers from "./components/UpdateUsers.jsx";
import Users from "./components/users.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}> </Route>
          <Route path='/create' element={<CreateUsers/>}> </Route>
          <Route path='/update' element={<UpdateUsers/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
