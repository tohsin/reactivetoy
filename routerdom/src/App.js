
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { Navbar } from './NavBar';
import { useState, createContext } from 'react';

export const AppContext = createContext()

function App() {
  const [userName, setUsername] = useState("Tosin King")
  
  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1>Error 404</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );

}

export default App;
