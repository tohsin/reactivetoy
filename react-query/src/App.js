import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { Navbar } from './NavBar';
import {QueryClient, QueryClientProvider} from"@tanstack/react-query"
import './App.css';

function App() {
  const client = new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus: false
      }
    }
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
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
      </QueryClientProvider>
  </div>
  )
}

export default App;
