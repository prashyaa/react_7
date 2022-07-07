import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Student from './Components/Students';
import Contact from './Components/Contact';
import NavBar from './Components/Navbar';
import Detail from './Components/Detail';
import AddStudent from './Components/AddStudent';
import Edit from './Components/Edit';
function App() {
 return (

  <Detail>
  
    <div className="App">


<BrowserRouter>

<NavBar />

<Routes>

<Route path='/home' element={<Home />} />
<Route path='/student' element={<Student />} />
<Route path='/contact' element={<Contact />} />
<Route  path='/add-student' element={<AddStudent />}/>
<Route path="/Edit/:id" element={<Edit />} />

</Routes>

</BrowserRouter>


     
    </div>
    </Detail>
  );
 
}

export default App;