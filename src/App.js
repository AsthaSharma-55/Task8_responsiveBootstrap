
import './App.css';
import Home from './components/Home';
import About from './components/about';
import Profile from './components/profile';
import Filter from './components/Filter';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import UserData from './components/UserData';

function App() {
  return (
    <div className="App m-0 p-0">
       <BrowserRouter>
      <Routes>
      <Route path='/'element={<Filter/>}   />
        <Route path='/home'element={<Home/>}   />
        <Route path='/about'element={<About/>}   />
        <Route path='/profile'element={<Profile/>}   />
        <Route path='/home/users/:id'element={<UserData/>}   />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
