import './App.css';
import Read from './Components/Read';
import Update from './Components/Update';
import Create from './Components/create';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="main">
    <h2>CRUD OPERATION</h2> 
     <BrowserRouter>
      <Routes>
          <Route exact path="/Read" element={<Read/>}/>
          <Route exact path="/Update" element={<Update/>}/>
          <Route exact path="/create" element={<Create/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
