import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={}/>
                  <Route path="/create" element={}/>
                  <Route path="/update" element={}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
