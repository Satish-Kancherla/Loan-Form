import './App.css';
import Employeedata from './Employeedata';
import Loan from './Loan';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
 

function App() {
  return (
    <BrowserRouter>
    <div className="App">    
    </div>
    <Routes>
      <Route exact path='/'element={<Loan />}> </Route>
      <Route path='/employeedata' element={<Employeedata />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
