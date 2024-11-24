import './App.css';
import Nav from './Nav';
import Home from './Home';
import SingleMovie from './SingleMovie';
import { Route, Routes } from 'react-router-dom';
import AddMovie from './AddMovie';
import Admin from './Admin';
import UpdateMovie from './UpdateMovie';


function App() {
  return (
    <div className="App">
      <Nav/>
      
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies/:id" element={<SingleMovie />} />    
                <Route path="/admin/add" element={<AddMovie />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/update/:id" element={<UpdateMovie />} />


            </Routes>
       

    </div>
  );
}

export default App;
